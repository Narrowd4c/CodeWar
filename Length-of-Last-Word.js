//https://leetcode.com/problems/length-of-last-word/

let lengthOfLastWord = function(s) {
    let arr = s.trim().split(" ")
    return arr[arr.length -1].length
};


let lengthOfLastWord = function(s) {
    let arr = s.trim()
    return arr.length - (arr.lastIndexOf(" ") + 1)
};
