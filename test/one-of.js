var λ = require('../fantasy-helpers'),
    isAnyOf = function(a) {
        return function(b) {
            var i;

            for(i = 0; i < a.length; i++) {
                if(λ.strictEquals(a[i])(b)) {
                    return true;
                }
            }

            return false;
        };
    };

exports.oneOf = {
    'when testing oneOf should return one of the values': function(test) {
        var a = ['boolean', 'number', 'string'];
        test.ok(isAnyOf(a)(λ.oneOf(a)));
        test.done();
    }
};