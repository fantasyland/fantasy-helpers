//
//  ## isTypeOf(a)(b)
//
//  Returns `true` if `b` has `typeof a`.
//
var isTypeOf = function(a, b) {
    return function(b) {
        return typeof b === a;
    };
};

//
//  ## isBoolean(a)
//
//  Returns `true` if `a` is a `Boolean`.
//
var isBoolean = isTypeOf('boolean');

//
//  ## isFunction(a)
//
//  Returns `true` if `a` is a `Function`.
//
var isFunction = isTypeOf('function');

//
//  ## isNumber(a)
//
//  Returns `true` if `a` is a `Number`.
//
var isNumber = isTypeOf('number');

//
//  ## isObject(a)
//
//  Returns `true` if `a` is a `Object`.
//
var isObject = isTypeOf('object');

//
//  ## isString(a)
//
//  Returns `true` if `a` is a `String`.
//
var isString = isTypeOf('string');

//
//  ## isArray(a)
//
//  Returns `true` if `a` is an `Array`.
//
function isArray(a) {
    if(Array.isArray) return Array.isArray(a);
    else return {}.toString.call(a) === "[object Array]";
}

//
//  ## isInstanceOf(a)(b)
//
//  Returns `true` if `a` is an instance of `b`.
//
var isInstanceOf = function(a) {
    return function(b) {
        return b instanceof a;
    };
};

exports = module.exports = {
    isTypeOf: isTypeOf,
    isBoolean: isBoolean,
    isFunction: isFunction,
    isNumber: isNumber,
    isObject: isObject,
    isString: isString,
    isArray: isArray,
    isInstanceOf: isInstanceOf
};
