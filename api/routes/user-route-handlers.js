const mongoose = require('mongoose');
const User = require('../data/models/user');

const ObjId = mongoose.Types.ObjectId;

const log = require('../helpers/log');
const send500 = require('../helpers/send500');
const send404 = require('../helpers/send404');

// TODO(Mitch): Needs testing.
exports.getUserByUsername = (req, res) => {
  var username = req.params.username;
  var {username, password} = req.body;

};

exports.createUser = (req, res) => {
  var data = req.body;
  var {username, password} = req.body;
  User.create({username, password}, (err, user) => {
    if (err) log.error(err);
    res.status(201).send(user);
  });

};

exports.updateUserByUsername = (req, res) => {
  var username = req.params.username;
  var newUsername = req.body.username;
  var statusCode = 201;
  User.findOneAndUpdate({username: username}, {username: newUsername}, {new: true}, (err, doc) => {
    if (err)  {
      statusCode = 409;
      log.error(err);
      doc = "Username must be unique, try another";
    }
    res.status(statusCode).send(doc);
  });
};

exports.deleteUserByUsername = (req, res) => {
  var username = req.params.username;
  User.findOneAndRemove({username: username}, (err, doc) => {
    if (err)  log.error(err);
    res.status(201).send(doc);
  });
};

exports.addCompletedLesson = (req, res) => {
  var username = req.params.username;
  var lessonId = req.body.lessonId;
  var score = req.body.score;
  User.findOne({username: username}).then(function(user) {
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

    User.findOneAndUpdate({username: username}, {lessonsCompleted: user.lessonsCompleted}, function(err) {
     if (err) {
       log.error(err);
     }
     res.status(201).send(user);
    });
  });
};










