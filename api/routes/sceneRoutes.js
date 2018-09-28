'use strict';
module.exports = function(app) {
  var scene = require('../controllers/sceneController');

  // todoList Routes
  app.route('/scenes')
    .get(scene.list_all_scenes)
    .post(scene.create_a_scene);


  app.route('/scene/:scene')
    .get(scene.read_a_scene)
    .put(scene.update_a_scene)
    .delete(scene.delete_a_scene);
};