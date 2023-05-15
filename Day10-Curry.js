//https://leetcode.com/problems/curry/editorial/

let curry = function(fn) {
   return function curried(...args) { // -> csum    // 整合參數(...args, ...nextArgs)
      
      if(args.length >= fn.length) { // fn.length = 2 -> sum(a, b) 的 a, b
         return fn(...args); // ...args 依順序賦予給 sum(a, b) 剩餘的被忽略. -> sum(1,2,3,4,5,6,7) -> a = 1, b = 2 
      }

      return (...nextArgs) => curried(...args, ...nextArgs); // 
   };
};

function sum(a, b) { return a + b; }
const csum = curry(sum);
csum(1)(2,3,4,5,6,7) // 3  -> csum(a)(). -> 第一個 () 參數不能超過 fn 的參數 , 如 csum(1,2) -> fn(...args) // output 3 , 3 不是 function 無法執行. csum(1,2)() = 3()
