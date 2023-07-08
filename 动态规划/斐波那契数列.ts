/** 递归 */
function fib(n: number) {
  if (n <= 1) return n
  return fib(n - 1 ) + fib(n-2)
}

/**递归，记忆化搜索 */
function fib_v2(n: number,memo:number[] = []):number {
  if (n <= 1) return n
  
  //求n的值，直接拿到值返回即可
  if (memo[n]) {
    return memo[n]
  }

  // 没有从meno中获取到值
  const res = fib_v2(n - 1, memo) + fib(n - 2, memo)
  memo[n] = res 
  return res
}

/**动态规划雏形 */
function fib_v3(n: number): number {
  // n位置的值：（n-1）+(n_2)

  const memo: number[] = []
  for (let i = 0; i <= n; i++){
    // 初始化状态0和1位置对应的数字是0和1
    if (i <= 1) {
      memo[i] = i
      continue
    }
    // i = 0 memo = 0
    // i = 1 memo = 1
    // i = 2 memo = 1
    // i = 3 memo = 2
    memo[i] = memo[i - 1] + memo[i - 2]
  }

  return memo[n]
}

/**动态规划-步骤划分 */
function fib_v4(n: number): number{
  // 1.定义状态
  // dp保留斐波那契数列中每一个位置对于第值（状态）
  // dp[x]表示的就是x位置对应的值（状态）
  // 2.状态转移方程：dp[i] = dp[i-1] + dp[i-2]
  // 状态转移方程一般情况都是写在循环（for/while）中
  //3.设置初始化状态：dp[0]/dp[1] 初始化状态
  // 4.计算最终的结果


  // 1.定义状态
  const dp: number[] = []
  // 2.初始化状态
  dp[0] = 0
  dp[1] = 1


  for (let i = 0; i <= n; i++){
    // 3.状态转移方程
    dp[i] = dp[i - 1] + dp[i - 1]
  
  }
  // 4.计算最终的结果 
  return dp[n]
}  

/**动态规划-状态压缩 */
function fib_v5(n: number): number{
  if (n <= 1) return n
  
  // 1.定义状态和2.初始化状态
  let prev = 0
  let cur = 1

  for (let i = 2; i <= n; i++){
    // 3.状态转移方程
    const newValue = prev + cur
    prev = cur
    cur = newValue
  
  }
  // 4.计算最终的结果 
  return cur
}  