function numSquares(n: number): number {
  // 1.确定dp数组（dp table）以及下标的含义
  //  dp[j]和为j的完全平方数的最少数量为dp[j]
 
  // 2. 确定递推公式
  // dp[j] = min(dp[j], dp[j - i * i] + 1)
 
  //3. 初始化
  // dp(0) 0
  // 每次dp 去最小值，非0下标的dp[j] 一定要初始化为最大值，这样dp[j]在递推的适合
  // 才不会被初始值覆盖
 
  // 4.确定遍历顺序 
  // 长度为n, 从0开始遍历，所以初始化程度为n+1的数组，不然是变量不到n下标的
 
  const dp = new Array(n + 1).fill(Infinity)
 
  dp[0] = 0
 
  for( let i = 1; i <= n; i++){
      for(let j = 1 ; j*j <= i ; j++){
          dp[i] = Math.min(dp[i],dp[i - j * j]+ 1)
 
      } 
  }
 return dp[n]
 };