// 1.定义状态：dp[i]
// dp[i]: 在i这一天卖出能获取到的最大收益
// dp[0] = 0
// dp[1] = -6
// dp[2] = 4
// dp[3] = 2

// 2.状态转移方程
// dp[i] = price[i] - minPrice

// 3.初始化状态：dp[0] = 0

// 4.计算最终的解：遍历整个数组，找到最大值



/* 另一种思路  */
// 1.定义状态：dp[i]
// dp[i]: 到i天能获取到的最大收益是多少


// 2.状态转移方程
// dp[i] =max(dp[i - 1], price[i] - minPrice)

// 3.初始化状态：dp[0] = 0

// 4.获取最后一次的值dp[n-1]

function maxProfit(prices: number[]): number {
  const n = prices.length

  if(n <=1) return 0

  // 1.定义状态
  const dp: number[] = []

  // 2.设置初始化值
  dp[0] = 0

  // 3. 状态转移方程dp[i]
  let minPrice = prices[0]
  for (let i = 1; i <= n; i++){
    // 当前i位置 - 前一个最小值
    // dp[i] = prices[i] - minPrice

    // 另一种思路
    dp[i] = Math.max(prices[i] - minPrice,de[i - 1])
    minPrice = Math.min(prices[i], minPrice)
    // console.log('最小值的变化：', minPrice) 
    
  }
    // return Math.max(...dp)
    return dp[n-1]


}