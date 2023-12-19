/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const dic: { [key: string]: number } = {};
  for (const c of s) {
    dic[c] = (dic[c] || 0) + 1;
  }
  for (const c of t) {
    dic[c] = (dic[c] || 0) - 1;
  }
  for (const val of Object.values(dic)) {
    if (val !== 0) {
      return false;
    }
  }
  return true;
    
};
// @lc code=end

