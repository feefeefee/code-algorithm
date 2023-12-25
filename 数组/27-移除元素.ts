/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  // 用双指针法，快慢指针，把数组分割成2个部分，
  // 前半段是有效部分，存储的是不等于 val 的元素。
  // 后半段是无效部分，存储的是等于 val 的元素。
  
  //定义快慢指针
  let fast = 0
  let slow = 0

  // 开始快慢指针并行，
  // 快指针去寻找新的元素
  // 慢指针指向有效数组的最后一位
  // 当快指针找到的元素不等于 val 时，那么就把当前的值
  // 赋值给慢指针指向的索引，同时慢指针向前移动

  // 循环终止条件，快指针遍历到了nums最后一位
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast]
      slow ++
    }
    fast++
  }

  return slow

};
// @lc code=end

