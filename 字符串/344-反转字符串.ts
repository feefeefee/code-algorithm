/*
 * @lc app=leetcode.cn id=344 lang=typescript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  // 双指针 相向遍历
  // 把右指针的指和左指针对调
  // 直到两个指针相遇
  let left: number = 0
  let right: number = s.length - 1
  while (left < right) {
    const temp = s[left]
    s[left] = s[right]
    s[right] = temp
    left++
    right--
  }
};
// @lc code=end

