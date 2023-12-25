/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
   // 把 magazine 的字符串 以{单词：单词出现次数}构建成键值对
   // 遍历ransomNote 字符串，判断是否在map中 出现 ，出现就-1
   const helpMap = new Map<string,number>()
   const helpArr:string[] = []

   for(const key of magazine){
      const isExist = helpMap.has(key)
      helpMap.set(key,isExist ? helpMap.get(key) + 1 : 1 )
   }

   for(const str of ransomNote){
      
       if(helpMap.has(str)){
           const getVal = helpMap.get(str)
           getVal > 1 ? helpMap.set(str,getVal - 1):helpMap.delete(str)
       }else {
           helpArr.push(str)
       }
   }
   
    return helpArr.length > 0 ?false: true
};
// @lc code=end

