function rob(nums: number[]): number {
  // 1间房屋 偷窃
  // 2间房屋 取最高金额偷窃
  //f(x) = max(f(x - 2)+nums[x],f(x - 1))

  // 边界情况
  const n = nums.length
  if (n === 0) return 0
  if (n === 1) return nums[0]

  if (n === 2) return Math.max(nums[0], nums[1])

  /* 
  - 如果偷窃了第一间房屋，则不能偷窃最后一间房屋，因此偷窃房屋的范围是第一间房屋到最后第二间房屋；
  - 如果偷窃了最后一间房屋，则不能偷窃第一间房屋，因此偷窃房屋的范围是第二间房屋到最后一间房屋。

  假设数组 nums 的长度为 n。
  - 如果不偷窃最后一间房屋，则偷窃房屋的下标范围是 [0,n−2]；
  - 如果不偷窃第一间房屋，则偷窃房屋的下标范围是 [1,n−1]

  */

  // 对于两段下标范围分别计算可以偷窃到的最高总金额，其中的最大值即为在 n 间房屋中可以偷窃到的最高总金额。
  const result1 = robRange(nums, 0, n - 2)
  const result2 = robRange(nums, 1, n - 1)
  return Math.max(result1, result2)

};


function robRange(nums: number[], start: number, end: number) {
  if (end === start) return nums[start]

  const n = nums.length
  const dp = new Array(n).fill(0)
  dp[start] = nums[start]
  dp[start + 1] = Math.max(nums[start], nums[start + 1])
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }

  return dp[end]

  /* 
 - 时间复杂度O(n)
 - 空间复杂度O(n)
 
 */
}

function robRangeV2(nums: number[], start: number, end: number) {
  let first = nums[start]
  let second = Math.max(nums[start], nums[start + 1])

  for (let i = start + 2; i <= end; i++) {
    const temp = second
    second = Math.max(first + nums[i], second)

    first = temp
  }
  return second

  
  /* 
  - 时间复杂度O(n)
  - 空间复杂度O(1)
  
  */
}
