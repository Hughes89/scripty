const mongoose = require('mongoose');
const Content = require('../data/models/content');

const ObjId = mongoose.Types.ObjectId;

const log = require('../helpers/log');
const send500 = require('../helpers/send500');
const send404 = require('../helpers/send404');

exports.getContent = (req, res) => {};

exports.getContentById = (req, res) => {
  const id = req.params.id;
};

exports.getContentByType = (req, res) => {
  const type = req.params.type;
};

exports.createContent = (req, res) => {};

exports.updateContentById = (req, res) => {
  const id = req.params.id;
  var data = req.body;

  Content.findOneAndUpdate({_id: id}, data, {new: true}, function(err, doc) {
    if (err) {
      log.error(err)
    }
    return doc;
  });

  res.status(201).send("updated a lesson");
};

exports.deleteContentById = (req, res) => {
  const id = req.params.id;
};

exports.deleteAllContentsByLessonId = (id) => {
  console.log('deleteAllContentsByLessonId fired')
  Content.remove({"lessonId": id}, function(err, doc) {
    if (err) {
      log.error(err);
    }
    return doc;
  })
};



