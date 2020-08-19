var colors = require('colors');
var package = require('../package.json');

var vars = {
    dev: true,
    splash: {
        title: colors.brightRed.bold(package.title) + " " + colors.white.bold(package.description),
        details: colors.grey(package.name) + colors.grey(" | ") + colors.grey(package.version) + colors.grey(" | ") + colors.grey(package.homepage),
        div: colors.grey("____________________________________________________________\n"),
        messageConsole: null
    },
    server: {
        local: "http://localhost:",
        port: 3000,
        db: {
            host: "mongodb://127.0.0.1:",
            port: "27017/",
            name: "nodeapi",
            collection: "entry",
            connect: null
        },
        remote: {
            host: null,
            port: null,
            db: {
                host: null,
                port: null,
                name: null,
                collection: null,
                connect: null
            }
        },
        api: {
            route: "api"
        }
    }
}
var s = vars.splash;
var db = vars.server.db;
vars.splash.messageConsole = s.title + "\n" + s.div + "\n" + s.details + "\n" + s.div;
vars.server.db.connect = db.host + db.port + db.name

module.exports = vars;