//
//  ## extend(a, b)
//
//  Right-biased key-value concat of objects `a` and `b`:
//
//       extend({a: 1, b: 2}, {b: true, c: false}) == {a: 1, b: true, c: false}
//
function extend(a, b) {
    var rec = function(a, b) {
        var i;
        for(i in b) {
            a[i] = b[i];
        }
        return a;
    };
    return rec(rec({}, a), b);
}

exports = module.exports = extend;
