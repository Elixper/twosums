/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  for (let i = 0 ; i < nums.length ; i++ ) {
      if (target - nums[i+1] === nums[i]) {
          return [nums.indexOf(nums[i]),nums.indexOf(nums[i+1])];
      }
  }
};

console.log(twoSum([2,7,11,15],9))
console.log(twoSum([3,2,4],6))