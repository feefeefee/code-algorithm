function lengthOfLIS(nums: number[]): number {
  // 状态定义：dp(i)= 以nums[i]为结尾的元素的子序列的长度
  //nums[i] 必须被选取，且必须是这个子序列的最后一个元素；

  // 如果一个较大的数接在较小的数后面，就会形成一个更长的子序列。
  //只要 nums[i] 严格大于在它位置之前的某个数，那么 nums[i] 就可以接在这个数后面形成一个更长的上升子序列。


  // dp(i) = Max(dp(j)+1,dp(i))
  // 0<= j < i,nums[j] < nums[i]

  //初始化
  // dp[i] = 1

  const n = nums.length
  if (n < 2) {
    return n
  }
  const dp = new Array(n).fill(1)

  let maxRes = 1
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
    if (dp[i] > maxRes) {
      maxRes = dp[i]
    }
  }

  return maxRes

};

const res = lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]) //4
const res1 = lengthOfLIS([0, 1, 0, 3, 2, 3]) //4
const res2 = lengthOfLIS([7, 7, 7, 7, 7, 7, 7]) //1

console.log(res, res1, res2)
