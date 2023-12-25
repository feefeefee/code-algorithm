/*
 * @lc app=leetcode.cn id=541 lang=typescript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
function reverseStr(s: string, k: number): string {
     // 所以当需要固定规律一段一段去处理字符串的时候，要想想在在for循环的表达式上做做文章。
     let left:number
     let right:number
   
     const sArr = s.split('')
     const length = sArr.length
 
     for (let i = 0; i < length; i += 2 * k) {
         left = i;
         right = (i + k - 1) >= length ? length - 1 : i + k - 1;
         while (left < right) {
           const  temp = sArr[left];
             sArr[left] = sArr[right];
             sArr[right] = temp;
             left++;
             right--;
         }
     }
 
     return sArr.join('') 
};
// @lc code=end

