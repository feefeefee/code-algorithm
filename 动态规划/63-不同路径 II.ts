function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  /**
    1. 确定dp数组和下标含义：
    dp[i][j]表示从[0,0]出发到[i,j]共有dpp[i,j]条不同的路径

    2.确定递推公式：
    dp[i][j] = dp[i-1][j] + dp[i][j-1]
    
    因为有了障碍，(i, j)如果就是障碍的话应该就保持初始状态（初始状态为0）

    3.初始化
    dp[i][0]一定都是1，因为从(0, 0)的位置到(i, 0)的路径只有一条，那么dp[0][j]也同理

    但如果(i, 0) 这条边有了障碍之后，障碍之后（包括障碍）都是走不到的位置了，所以障碍之后的dp[i][0]应该还是初始值0。

    4.确定遍历顺序
    这里要看一下递推公式dp[i][j] = dp[i - 1][j] + dp[i][j - 1]，dp[i][j]都是从其上方和左方推导而来，那么从左到右一层一层遍历就可以了。

这样就可以保证推导dp[i][j]的时候，dp[i - 1][j] 和 dp[i][j - 1]一定是有数值的。

   */

  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))

  // 边界条件
  // 初始化的部分，很容易忽略了障碍之后应该都是0的情况。
  for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
    dp[i][0] = 1
  }

  for (let j = 0; j < n && obstacleGrid[0][j] === 0; j++) {
    dp[0][j] = 1
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1]

}; 