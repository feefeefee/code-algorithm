/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
function reverseWords(s: string): string {
  // 倒叙遍历 字符串， 确定单词索引的边界
  // 把单词添加到数组
  // 把数组转换为字符串
  
  s = s.trim()
  const strArr: string[] = []

  let left:number =  s.length - 1
  let right: number = s.length - 1
  
  while (left >= 0) {
    while (s[left] !== ' ' && left >= 0) {
      left--
    }
    // 这个适合left 指向了第一个空格
    strArr.push(s.substring(left + 1, right + 1))
    
    // 接下来遇到空格就跳过
    while (s[left] === ' ' && left >= 0) {
      left --
    }
    right = left
  }

  

  return strArr.join(' ')
};
// @lc code=end

