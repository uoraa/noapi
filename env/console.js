'use strict';

const _var = require('../env');
var colors = require('colors');
const splash = _var.splash;
const server = _var.server;

var init = splash.messageConsole;

exports.root = function (req, res) {
    var count = Object.keys(req.query).length;
    if (count == 0) {
        var message = "ROOT"
        console.clear();
        console.log(init);
        console.log(colors.grey(message));
    }
    res.send("hello");
};

exports.message = function (message, data) {
    console.clear();
    console.log(init);
    console.log(colors.grey(server.local + server.port + " | " + message));
    console.log(colors.grey(splash.div));
    console.log(colors.grey(data[0]));
    console.log(colors.grey(splash.div));
};