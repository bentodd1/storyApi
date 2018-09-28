'use strict';


var mongoose = require('mongoose'),
  Scene = mongoose.model('Scenes');

exports.list_all_scenes = function(req, res) {
 console.log('In here');
  Scene.find({}, function(err, scene) {
    if (err)
      res.send(err);
    res.json(scene);
  });
};




exports.create_a_scene = function(req, res) {
  var new_scene = new Scene(req.body);
  new_scene.save(function(err, scene) {
    if (err)
      res.send(err);
    res.json(scene);
  });
};


exports.read_a_scene = function(req, res) {
  Scene.findById(req.params.id, function(err, scene) {
    if (err)
      res.send(err);
    res.json(scene);
  });
};


exports.update_a_scene = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, scene) {
    if (err)
      res.send(err);
    res.json(scene);
  });
};


exports.delete_a_scene = function(req, res) {


  Scene.remove({
    _id: req.params.id
  }, function(err, scene) {
    if (err)
      res.send(err);
    res.json({ message: 'Scene successfully deleted' });
  });
};