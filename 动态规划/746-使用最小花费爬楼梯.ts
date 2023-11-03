function minCostClimbingStairs(cost: number[]): number {
  // 到达楼梯顶部的的台阶 可以由 n-1 和n-2得出
  // f(x)为从第x个台阶到达顶部所需要的花费
  // f(x) = min(f(x-1)+g(n-1), f(x - 2) + g(n - 2))

  // f(0) = 0
  // f(1) =  0
  // f(2) = min(f(1)+g(1),f(0)+g(0)) 
  // f(3) = min(f(2)+g(2),f(1)+g(1)) 


  const n = cost.length
  if (n <= 0) return 0

  const dp = new Array(n + 1).fill(0)

  dp[0] = 0
  dp[1] = 0



  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1])
  }

  return dp[n]

};


function minCostClimbingStairsV2(cost: number[]): number {

  const n = cost.length
  if(n <= 0) return 0

  let prev = 0
  let curr = 0

  for(let i = 2; i <= n; i++){
    const temp = Math.min(prev+cost[i-2], curr + cost[i-1])
    prev = curr
    curr = temp
  }

  return curr


};