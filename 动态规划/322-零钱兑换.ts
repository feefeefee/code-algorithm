function coinChange(coins: number[], amount: number): number {
  //1. 确定dp数组和下标定义
  // dp[j] = 当金额为j的时候缩需要的最小硬币个数

  // 2. 确定递推公式
  // dp[j] = 上一次取的总金额  + 1 =  dp[j - coins[i]] + 1  ----> 这一次取了才满足，这一次取
  // dp[j] =  上一次取的总金额  = dp[j]   ------> 上一次采取的金额 已经满足了，这一次不取

  // dp[j] = min(dp[j - coisn[i] + 1, dp[j]])   -----> 两种情况取最小值

  // 3. dp数组初始化
  // 【1，2，5】
  // dp[0] = 0 
  // dp[1] = 1
  // dp[2] = 1
  // dp[3] = 2
  // dp[4] = 2
  // dp[5] = 1

  /*

  考虑到递推公式的特性，
  dp[j]必须初始化为一个最大的数，否则就会在min(dp[j - coins[i]] + 1, dp[j])比较的过程中被初始值覆盖。

  所以下标非0的元素都是应该是最大值。
  
   */
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      if (dp[j - coins[i]] === Infinity) continue;
      dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j])
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
};