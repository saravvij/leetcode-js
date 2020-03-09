const assert = require('assert').strict;

/* 
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]. 
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {

    // When nums[] is undefined
    if(!nums) {
        return;
    }
    
    // Create map 
    const map = {};

    /**
     * {
     *   2:  0,
     *   7:  1,
     *   11: 2,
     *   15: 3,
     * }
     */
    nums.forEach((value, index) => map[value] = index);
    

    for(let index1=0; index1<nums.length; index1++) {
        const index2 = map[target - nums[index1]];
        if(index2 && index2 !== index1) {
            return [index1, index2];
        }
    }
    
    return;
};

// Tests
assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
assert.deepEqual(twoSum([2, 1, 1, 15], 2), [1, 2]);
assert.deepEqual(twoSum([], 9), undefined);
assert.deepEqual(twoSum(undefined, 9), undefined);