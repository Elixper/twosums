/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  for (let i = 0 ; i < nums.length ; i++ ) {
      if (target - nums[i+1] === nums[i]) {
          return [i,i+1];
      }
      if (target - nums[i+2] === nums[i]) {
        return [i,i+2];
  }
  };
 }
console.log(twoSum([2,7,11,15],9))
console.log(twoSum([3,2,3],6))
console.log(twoSum([3,3],6))