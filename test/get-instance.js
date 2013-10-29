var λ = require('../fantasy-helpers');

exports.getInstance = {
    'when testing getInstance with function call should return correct instance': function(test) {
        var Point = function(){
            var a = λ.getInstance(this, Point);
            return a;
        };
        var point = Point();
        test.ok(λ.getInstance(point, Point) instanceof Point);
        test.done();
    },
    'when testing getInstance with new call should return correct instance': function(test) {
        var Point = function(){
            var a = λ.getInstance(this, Point);
            return a;
        };
        var point = new Point();
        test.ok(λ.getInstance(point, Point) instanceof Point);
        test.done();
    },
    'when testing getInstance with function call with arguments should return correct instance': function(test) {
        var Point = function(x){
            var a = λ.getInstance(this, Point);
            a.x = x;
            return a;
        };
        var random = Math.random();
        var point = Point(random);
        test.ok(λ.getInstance(point, Point).x, random);
        test.done();
    },
    'when testing getInstance with new call with arguments should return correct instance': function(test) {
        var Point = function(x){
            var a = λ.getInstance(this, Point);
            a.x = x;
            return a;
        };
        var random = Math.random();
        var point = new Point(random);
        test.ok(λ.getInstance(point, Point).x, random);
        test.done();
    }
};