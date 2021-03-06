/**
 * Problem #1: https://leetcode-cn.com/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
  let i, j;
  for (i = 0; i < nums.length; i+=1) {
    for (j = i + 1; j < nums.length; j+=1) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};