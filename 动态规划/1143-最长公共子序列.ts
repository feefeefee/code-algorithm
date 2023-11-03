function longestCommonSubsequence(text1: string, text2: string): number {
  // 状态定义 dp[i][j] 表示text1[0,i-1]和text2[0 , j-1]的最长公共子序列
  
  // - 当 text1[i - 1] == text2[j - 1] 时，说明两个子字符串的最后一位相等，所以最长公共子序列又增加了 1，所以 dp[i][j] = dp[i - 1][j - 1] + 1
  
  // - 当 text1[i - 1] != text2[j - 1] 时，说明两个子字符串的最后一位不相等，那么此时的状态 dp[i][j] 应该是 dp[i - 1][j] 和 dp[i][j - 1] 的最大值。
  
  // - dp[i][j] = dp[i - 1 ][j - 1] +1  ，当text1[i - 1] = text2[j - 1]
  // - dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]), 当text1[i - 1] !== text2[j - 1]
  
  // 状态初始化
  // i = 0, dp[0][j] = 0
  // j = 0, dp[j][0] = 0
  
  // 返回结果
  // dp[text1.length][text2.length]
  
  const m = text1.length
  const n = text2.length
  const dp = new Array(m+1).fill(0).map(() =>new Array(n+1).fill(0))
  
  for(let i = 1; i <= m; i++){
      for (let j = 1; j <= n; j++){
          if(text1[i - 1] === text2[j - 1]){
              dp[i][j] = dp[i - 1][j - 1] +1
          }else {
              dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
          }
      }
  }
  console.log(dp)
  return dp[m][n]
  
  };