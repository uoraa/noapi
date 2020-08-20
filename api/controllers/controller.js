'use strict';
var console = require('../../env/console');
const _var = require('../../env');
var db_name = _var.server.db.name;
var db_collection = _var.server.db.collection;
var mongoose = require('mongoose'),
    api = mongoose.model(db_collection);

mongoose.set('useFindAndModify', false);

function terminal(message, _function) {
    console.message("CONTROLLER | " + _function, message);
}

exports.noapi = function (message) {
    terminal(message, db_name);
};

exports.list = function (req, res) {
    api.find({}, function (err, task) {
        var message;
        if (err) {
            res.send(err);
            message = err;
        } else {
            res.json(task);
            message = task;
        }
        terminal(message, "list_all");
    });
};


exports.create = function (req, res) {
    var new_task = new api(req.body);
    new_task.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.read = function (req, res) {
    api.findById(req.params.id, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.update = function (req, res) {
    api.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};
// api.remove({}).exec(function(){});
exports.delete = function (req, res) {
    api.deleteOne({
        _id: req.params.id
    }, function (err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Successfully deleted' });
    });
};