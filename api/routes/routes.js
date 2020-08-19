
'use strict';

module.exports = function (app) {
    var todoList = require('../controllers/controller');
    var console = require('../../env/console');

    // todoList Routes
    app.route('/')
        .get(console.root);

    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);

    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);

    app.route('/a')
        .get(function (req, res) {
            res.send("hellooooooooo");
            todoList.noapi("a")
        });
};