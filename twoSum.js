// https://leetcode.com/problems/two-sum/description/

let twoSum = function(nums, target) {
  let result = []; 
  for(let i = 0 ; i<nums.length - 1; i++){
      for(let j = 1; j<nums.length; j++){
        if(nums[i]+ nums[j] === target){
          result.push(i, j)
          return result
        }
      }
   } 
};

console.log(twoSum([2,5,8,4], 6)) // [0, 3]

// let twoSum = function(nums, target) {
//   let keyIndexPair = {}  
//   for(let i = 0; i<nums.length; i++) {

//     let diff = Math.abs(nums[i] - target);

//     if(diff in keyIndexPair) {
//         return [keyIndexPair[diff], i]
//     } 

//     keyIndexPair[nums[i]] = i
//   }
// };
