const mongoose = require('mongoose');
const User = require('../data/models/user');

const ObjId = mongoose.Types.ObjectId;

const log = require('../helpers/log');
const send500 = require('../helpers/send500');
const send404 = require('../helpers/send404');

exports.getUsers = (req, res) => {};

// TODO(Mitch): Needs testing.
exports.getUserById = (req, res) => {
  const id = req.params.id;
  const {username, password} = req.body;

  Lesson.update({id: ObjId(id)}, {username, password}, (err) => {
    if (err) {
      send500(res, err);
    } else {
      res.status(201).send({username});
    }
  });
};

exports.createUser = (req, res) => {
  const data = req.body;
  const {username, password} = req.body;
  User.create({username, password}, (err, user) => {
    if (err) log.error(err);
    res.status(201).send(user);
  });

};

exports.updateUserById = (req, res) => {
  const id = req.params.id;
  //TODO(Mitch): Fill me in!
};

exports.deleteUserById = (req, res) => {
  const id = req.params.id;
  //TODO(Mitch): Fill me in!
};

exports.addCompletedLesson = (req, res) => {
  const id = req.params.id;
  const lessonId = req.body.lessonId;
  const score = req.body.score;
  User.findOne({_id: id}).then(function(user) {
    user.lessonsCompleted.forEach(function(lesson) {
      if (lesson.lessonId === lessonId) {
        if (lesson.score < score) {
          lesson.score = score;
        }
      }
    });

    var found = false;
    for (var i = 0; i < user.lessonsCompleted.length; i++) {
      if (user.lessonsCompleted[i].lessonId === lessonId) {
        found = true;
      }
    }
    if (!found) {
      user.lessonsCompleted.push({score: score, lessonId: lessonId});
    }

    User.findOneAndUpdate({_id:id}, {lessonsCompleted: user.lessonsCompleted}, function(err) {
     if (err) {
       log.error(err);
     }
     res.status(201).send(user);
    });
  });

  // .save().then(function(user) {
  //   res.status(201).send(user);
  // });


  // User.findOneAndUpdate({_id: id}, {$addToSet: {lessonsCompleted: data}}, {upsert: true, new: true}, (err, doc) => {
  //   if (err) log.error(err);
  //   res.status(201).send(doc);
  // });
};










