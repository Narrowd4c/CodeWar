//https://leetcode.com/problems/allow-one-function-call/description/

/**
 * @param {Function} fn
 * @return {Function}
 */
let once = function(fn) {
    let hascalled = false
    return function(...args){
        if(!hascalled){
            hascalled = true
            return fn(...args)
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
