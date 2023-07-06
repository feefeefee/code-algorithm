/* 
给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。
示例 1:

输入: [3,2,1,5,6,4], k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6], k = 4
输出: 4


*/

/* 
TODO:
1.选择排序太耗时了，可以实现 但是性能不好
*/
function findKthLargest(nums: number[], k: number): number {
  const n = nums.length
  let maxIndex 
  for(let i = 0; i< k;i++){
    maxIndex = i
    for(let j = i+1 ; j< n;j++){
      if(nums[maxIndex] < nums[j]){
        maxIndex = j
      }
    }
    if (i !== maxIndex) {
      [nums[i],nums[maxIndex]] = [nums[maxIndex],nums[i]]
    }

  }
  return nums[k-1]
};