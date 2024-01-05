/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  const countMap: Map<number, number> = new Map();
  for (let num of nums) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  // tS没有最小堆的数据结构，所以直接对整个数组进行排序，取前k个元素
  return [...countMap.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, k)
      .map(i => i[0]);
};
// @lc code=end

