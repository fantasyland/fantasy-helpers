var λ = require('../fantasy-helpers');

exports.create = {
    'when calling create should return correct instance': function(test) {
        var Point = function(){};
        test.ok(λ.create(Point.prototype) instanceof Point);
        test.done();
    },
    'when calling create should return a new instance': function(test) {
        var Point = function(){};
        test.ok(λ.create(Point.prototype) !== λ.create(Point.prototype));
        test.done();
    }
};
