'use strict';
var console = require('../../env/console');
var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');

function terminal(message, _function) {
    console.message("CONTROLLER | " + _function, message);
}

exports.noapi = function (message) {
    terminal(message, "noapi");
};

exports.list_all_tasks = function (req, res) {
    Task.find({}, function (err, task) {
        var message;
        if (err) {
            res.send(err);
            message = err;
        } else {
            res.json(task);
            message = task;
        }
        terminal(message, "list_all_tasks");
    });
};


exports.create_a_task = function (req, res) {
    var new_task = new Task(req.body);
    new_task.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.read_a_task = function (req, res) {
    Task.findById(req.params.taskId, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.update_a_task = function (req, res) {
    Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};
// Task.remove({}).exec(function(){});
exports.delete_a_task = function (req, res) {

    Task.remove({
        _id: req.params.taskId
    }, function (err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
};