var λ = require('../fantasy-helpers');

exports.bind = {
    'when testing bind should return correct value': function(test) {
        var x = λ.bind(function(a, b, c) {
            return a + b + c;
        });

        test.equal(x()(1, 2, 3), 1 + 2 + 3);
        test.done();
    },
    'when testing bind with an argument should return correct value': function(test) {
        var x = λ.bind(function(a, b, c) {
            return a + b + c;
        }, null, 1);

        test.equal(x(2, 3), 1 + 2 + 3);
        test.done();
    },
    'when testing bind with an argument and binding should return correct value': function(test) {
        var x = λ.bind(function(a, b, c) {
                return a + b + c;
            }, null, 1),
            y = λ.bind(x, null, 2);

        test.equal(y(3), 1 + 2 + 3);
        test.done();
    },
    'when testing function name with bind should return correct value': function(test) {
        var a = λ.bind(function namedFunction(a, b, c) {})();

        test.equal(λ.functionName(a), 'namedFunction');
        test.done();
    },
    'when testing function length with bind should return correct value': function(test) {
        var a = λ.bind(function(a, b, c) {})();

        test.equal(λ.functionLength(a), 3);
        test.done();
    }
};