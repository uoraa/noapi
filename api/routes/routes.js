
'use strict';

module.exports = function (app) {
    var nodeApi = require('../controllers/controller');
    var console = require('../../env/console');
    const _var = require('../../env');
    var api = _var.server.api;

    // nodeApi Routes
    app.route('/')
        .get(console.root);

    app.route('/' + api.route)
        .get(nodeApi.list)
        .post(nodeApi.create);

    app.route('/' + api.route +'/:id')
        .get(nodeApi.read)
        .put(nodeApi.update)
        .delete(nodeApi.delete);

    app.route('/a')
        .get(function (req, res) {
            res.send("hellooooooooo");
            nodeApi.noapi("a")
        });
};