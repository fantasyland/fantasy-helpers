var bind = require('./src/bind'),
    create = require('./src/create'),
    curry = require('./src/curry'),
    strictEquals = require('./src/strict-equals'),
    extend = require('./src/extend'),
    functions = require('./src/functions'),
    getInstance = require('./src/get-instance'),
    is = require('./src/is'),
    oneOf = require('./src/one-of'),
    randomRange = require('./src/random-range'),
    singleton = require('./src/singleton'),

    helpers = {
        bind: bind,
        create: create,
        curry: curry,
        strictEquals: strictEquals,
        extend: extend,
        getInstance: getInstance,
        oneOf: oneOf,
        randomRange: randomRange,
        singleton: singleton
    };

exports = module.exports = extend(helpers, extend(functions, is));
