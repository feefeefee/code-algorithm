/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  const rSet = new Set<number>()
  const numsSet = new Set<number>(nums1)

  for(const key of nums2){
      if(numsSet.has(key)){
          rSet.add(key)
      }
  }

  return [...rSet]
};
// @lc code=end

