/*
 * @lc app=leetcode.cn id=454 lang=typescript
 *
 * [454] 四数相加 II
 */

// @lc code=start
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
   // 分组 + 哈希表<total,出现次数> + 两数之差

  const helpMap = new Map<number, number>()
  let tempVal:number| undefined
  let resNum:number = 0
  
  // 遍历
  for (const i of nums1){
    for (const j of nums2){
       tempVal = helpMap.get(i + j)
      helpMap.set(i + j, tempVal ? tempVal + 1:1)
    }
  }

  for (const k of nums3){
    for (const t of nums4){
      tempVal = helpMap.get(0 - (k + t));
      if (tempVal) {
          resNum += tempVal;
      }
    }
  }
  return resNum
};
// @lc code=end

