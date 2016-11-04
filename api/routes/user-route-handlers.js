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
  const data = req.body;
  User.findOneAndUpdate({_id: id}, {$push: {lessonsCompleted: data}}, {upsert: true, new: true}, (err, doc) => {
    if (err) log.error(err);
    res.status(201).send(doc);
  });
};