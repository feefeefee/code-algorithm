function change(amount: number, coins: number[]): number {
  // 1.确定dp数组和下标的定义
  // dp[j] = 凑成总金额j的货币组合数为dp[j]
  // 2. 确定递推公司
  //dp[j] 就是所有的dp[j - coins[i]]（考虑coins[i]的情况）相加。

  // 所以递推公式：dp[j] += dp[j - coins[i]];

  //3. dp数组初始化
  // dp[0] = 1

  //4. 遍历顺序
  /**
  在求装满背包有几种方案的时候，认清遍历顺序是非常关键的。

如果求组合数就是外层for循环遍历物品，内层for遍历背包。

如果求排列数就是外层for遍历背包，内层for循环遍历物品。
   */

  const dp = new Array(amount + 1).fill(0)
  dp[0] = 1 

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = dp[j - coins[i]] + dp[j]
    }
  }

  return dp[amount]
};
