// Problem Statement : 
// you will implement a curry function that takes a given function as its argument and returns a curried version of that function. A curried function is a function that accepts a fewer or equal number of parameters as the original function and returns either another curried function or the same value the original function would have returned.

// To better understand this concept, let's take a look at some examples:

// Original function: sum(1, 2, 3) would return 6.
// Curried function: csum(1)(2)(3) should also return 6. You can also call the curried function as csum(1)(2, 3), csum(1, 2)(3), or csum(1, 2, 3).All possible methods of calling the curried function should return the same value as the original function.


const curry = function (fn) {
    return function curried(...rest) {
        if (rest.length >= fn.length) {
            return fn(...rest);
        } else {
            return function (...nextArgs) {
                return curried(...rest, ...nextArgs);
            }
        }
    }
}
console.log(curry);

export default curry;