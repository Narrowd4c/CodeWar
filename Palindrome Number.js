// https://leetcode.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
    let str = x.toString().split("").reverse().join('')
    return x === str
};

console.log(isPalindrome(121)) // true
console.log(isPalindrome(-121)) //false
console.log(isPalindrome(10)) //false
