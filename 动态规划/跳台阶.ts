/**动态规划 */
function jump(n: number): number {
  // 1.定义状态
  // dp = [每一台阶不同的方法]
  // dp[3] = xx

  // 2.确定状态转移方程
  // dp[i] = dp[i-1] + dp[i-2]

  // 3.初始化状态
  // dp[0] = 1
  // dp[1] = 1
  // 思考：dp[2] = 2
  // 思考：dp[3] = 3
  // 思考：dp[4] = 2 + 3

  // 4.最终的答案：dp[n]

  // 1.定义状态
  const dp: number[] = []
  
  // 2.初始化状态
  dp[0] = 1
  dp[1] = 1

  // 3.状态转移方程
  for (let i = 2; i <= n; i++){
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}

/**动态规划-状态压缩 */
function jump_v2(n: number): number {
  // 1.定义状态 2.初始化状态
  let pre = 1
  let cur = 1
  
  

  // 3.状态转移方程
  for (let i = 2; i <= n; i++){
    const iValue = pre + cur
    pre = cur
    cur = iValue
  }

  return cur
}