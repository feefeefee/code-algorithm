/*
 * @lc app=leetcode.cn id=1047 lang=typescript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
function removeDuplicates(s: string): string {
  // 如果栈中有值  并且栈顶的数据和当前数据一样 那就出栈
 
  const stack:string[] = []
  // 遍历字符串
  for(const ch of s){
      if(stack.length && stack[stack.length - 1] === ch){
          stack.pop()
      }else {
          stack.push(ch)
      }
     
  }
  return stack.join(''
    
};
// @lc code=end

