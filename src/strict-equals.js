//
//  ## strictEquals(a)(b)
//
//  Curried function for `===`.
//
function strictEquals(a) {
    return function(b) {
        return a === b;
    };
}

exports = module.exports = strictEquals;
