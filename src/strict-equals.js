//
//  ## strictEquals(a)(b)
//
//  Curried function for `===`.
//
function strictEquals(a) {
    return (b) => a === b;
}

exports = module.exports = strictEquals;
