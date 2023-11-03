function minPathSum(grid: number[][]): number {
  // 令f(x)(y)为到达[x,y]点的最小路径和
  // f(x)(y) = min(f(x-1)(y), f(x)(y-1))+g(x)(y)

  const m = grid.length
  const n = grid[0].length

  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))

  dp[0][0] = grid[0][0];

  // 边界状态
  // f(0)(y)和f(y)(0) = 0

  for (let i = 1; i < m; i++) {
    // 网格的第一行的每个元素只能从左上角元素开始向右移动到达
    dp[i][0] = dp[i - 1][0] + grid[i][0]
  }

  for (let j = 1; j < n; j++) {
    // 网格的第一列的每个元素只能从左上角元素开始向下移动到达
    dp[0][j] = dp[0][j - 1] + grid[0][j]
  }

  // 等于其上方相邻元素与其左方相邻元素两者对应的最小路径和中的最小值加上当前元素的值
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {

      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }

  return dp[m - 1][n - 1]


};