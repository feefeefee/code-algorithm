  // [3,5,1,-10,8,-12,10]
  
  // 1.定义状态 dp[i]
  // 以i位置的元素结尾的连续数组能获取到的最大值
  // dp[0] = 3
  // dp[1] = 8
  // dp[2] = 9
  // dp[3] = -1
  // dp[4] = max(nums[i],dp[3] + nums[i])
  // dp[4] = max(8,-1 + 8 = 7) = nums[i] = 8
  // dp[5] = -4
  // dp[6] = -10

  // 2.状态转移方程
  // dp[i] = max(nums[i],dp[i-1] + [nums[i]])

  // 3.初始化状态 dp[0] = 3

  // 4.最终值 遍历整个dp获取到最大的值

/** 动态规划 */
function maxArray(nums: number[]): number {

  // 1.获取数组的长度
  const n = nums.length

  // 2.定义状态
  const dp: number[] = []
  
  // 3.初始化状态
  dp[0] = nums[0]

  // 4.状态转移过程
  for (let i = 1; i < n; i++){
    dp[i] = Math.max(nums[i],nums[i] + dp[i-1])
  }

  return Math.max(...dp)

}

/** 动态规划-状态压缩*/
function maxArray_v2(nums: number[]): number {

  // 1.获取数组的长度
  const n = nums.length

  // 2.定义状态
  const dp: number[] = []
  
  // 3.初始化状态
 let preValue = nums[0]

  // 4.状态转移过程
  let max = preValue
  for (let i = 1; i < n; i++){
    preValue = Math.max(nums[i], nums[i] + dp[i - 1])
    max = Math.max(preValue,max)
  }

  return max

}