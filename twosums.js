/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        return [i, j];
      }
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 3], 6));
console.log(twoSum([3, 3], 6));

var twoSum2 = (nums, target) => {
  nums.sort((a,b)=>a-b);
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    console.log(nums[l])
    console.log(nums[l] + nums[r])
    if ((nums[l]+nums[r]) === target) {
      return [l,r];
  } else if((nums[l] + nums[r]) > target) {
      r--;
    } else {
      l++;
    }
  }
  console.log([l,r])
};

console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([3, 2, 3], 6));
console.log(twoSum2([3, 3], 6));