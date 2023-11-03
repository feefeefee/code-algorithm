function rob(nums: number[]): number {
  // f(x) 前x间房间里偷窃到的最高金额
  
  //偷了最后一件房，倒数第二间不能偷
  // 所以应该是最后一间房的钱+倒数第三节~到第一间偷到的总数
  // f(x) = f(x-2)  + nums[x]

  // 不偷最后一间房
  // f(x) = f(x-1)

  // 取最大值
  // f(x) = Math.max(f(x - 2) + nums[x] , f(x - 1))

  const n = nums.length
  const dp = new Array(n).fill(0)
  // 定义初始状态
  dp[0] = nums[0] // 只有一件房屋
  dp[1] = Math.max(nums[0],nums[1]) // 只有2间房屋，取最多钱偷

  for(let i = 2; i < n; i++){
      dp[i] = Math.max(dp[i - 2] + nums[i] , dp[i - 1])
  }

  return dp[n - 1]
  
};

const res = rob([1, 2, 3, 1])
console.log(res)

/* 空间优化 */

function robV2(nums: number[]): number {

  const n = nums.length
  let prev = 0
  let curr = 0


  // 每次循环，计算“偷到当前房子为止的最大金额”
  for(let i = 0; i < n; i++){
      // 循环开始时，curr表示dp[i - 1],prev表示dp[i-2]
      //dp[i] = max(dp[k - 1], dp[k - 2] + i)
      let temp = Math.max(curr,prev + nums[i])
      prev = curr
      curr = temp
      // 循环结束，curr表示dp[i] prev表示dp[i - 1]

  }

  return curr


  
};
const resV2 = robV2([1, 2, 3, 1])
console.log(resV2)