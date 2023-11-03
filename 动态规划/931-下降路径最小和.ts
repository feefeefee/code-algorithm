function minFallingPathSum(matrix: number[][]): number {
  // 令f(x)(y)为 在从第一行的元素到[x,y]点的路径和
  // f(x)(y) = min(f(x - 1)(y - 1), f(x - 1)(y), f(x -1)(y + 1))
  // G(x)(y) = min(f(x)( y - 1), f(x)(y), f(x)(y + 1))

  // 边界条件：
  // n = 1
  // f(x)(y) = c(x)(y)

  // y =  0, y = x 
  // f(x)(0) = min(f(x - 1)(0) , f(x - 1)(1))
  // f(y)(y) = min(f(y - 1)(y), f(y - 1)(y - 1))

  // 初始化

  if (matrix?.length <= 0) return 0

  const n = matrix.length

  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0))

  // 初始化：对于首行而言，每个位置的「最小成本」就是其「矩阵值」
  for (let j = 0; j < n; j++) {
    dp[0][j] = matrix[0][j]
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {

      const cur = matrix[i][j]

      dp[i][j] = dp[i - 1][j] + cur

      if (j - 1 >= 0) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1] + cur)
      }
      if (j + 1 < n) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j + 1]+ cur) 
      }

    }

  }

  return Math.min(...dp[n - 1])
};