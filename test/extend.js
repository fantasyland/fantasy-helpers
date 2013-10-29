var λ = require('../fantasy-helpers');

exports.extend = {
    'when testing extend with object should create a new object': function(test) {
        test.deepEqual(λ.extend({a: 1}, {b: 2}), {a: 1, b: 2});
        test.done();
    },
    'when testing extend with object should create a new object without modifying new object': function(test) {
        var a = {a: 1},
            b = {b: 2},
            c = λ.extend(a, b);

        test.deepEqual(a, {a: 1});
        test.deepEqual(b, {b: 2});
        test.done();
    },
    'when extending a a object should override property correctly from the right biased': function(test) {
        test.deepEqual(λ.extend({a: 1}, {a: 2}), {a: 2});
        test.done();
    }
};
