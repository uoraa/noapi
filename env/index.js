var colors = require('colors');
var package = require('../package.json');

var vars = {
    splash: {
        title: colors.brightRed.bold(package.title) + " " + colors.white.bold(package.description),
        details: colors.grey(package.name) + colors.grey(" | ") + colors.grey(package.version) + colors.grey(" | ") + colors.grey(package.homepage),
        div: colors.grey("____________________________________________________________\n"),
        messageConsole: null
    },
    server: {
        local: "http://localhost:",
        port: 3000
    }
}
var s = vars.splash;
vars.splash.messageConsole = s.title + "\n" + s.div + "\n" + s.details + "\n" + s.div;

module.exports = vars;