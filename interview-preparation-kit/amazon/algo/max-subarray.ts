/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxSum = nums[0];
    let currSum = nums[0];
    for (let i = 1; i < nums.length; i++ ) {
        currSum = Math.max(nums[i], nums[i] + currSum);
        maxSum = Math.max(currSum, maxSum);
    }

    return maxSum;

};

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(arr));