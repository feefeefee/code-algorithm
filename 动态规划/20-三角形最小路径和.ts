/**自顶向下 */
function minimumTotal(triangle: number[][]): number {
  // f[x][y] 为最小路径和
  // f[x][y] = min(f[x - 1][y - 1],f[x-1][y]) + c[x][y]
  // c[x][y]表示位置（x,y）对应元素的值

  // 边界情况,第x行最左侧
  // f[x][0] = f[x-1][0]+c[x][0]

  // 边界情况,第x行最右侧
  // f[x][x] = f[x-1][x-1] + c[x][y]

  // 最终求f[n-1][0]到f[n-1][n-1]中的最小值，n三角形行数

  // 初始状态
  // f[0][0] = c[0][0]

  const n = triangle.length

  const dp:number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));

  dp[0][0] = triangle[0][0]
  for (let x = 1; x < n; x++){
    dp[x][0] = dp[x-1][0] + triangle[x][0]
      for(let y = 1; y < x; y++){
          dp[x][y] = Math.min(dp[x-1][y-1],dp[x-1][y])+triangle[x][y]

      }
         dp[x][x] =dp[x-1][x-1] + triangle[x][x]     
  }
  

  let min = dp[n-1][0]

  for(let i =1; i < n ;i++){
      min = Math.min(min,dp[n-1][i])
  }

  return min
  
};

const minTotal = minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])

console.log(minTotal)



/* 自低向上递推 */

function minimumTotalV2(triangle: number[][]): number {
  const n = triangle.length

  const dp = new Array(n+1).fill(0)

  for (let i = n- 1; i >= 0; i-- ){
      for (let j = 0; j<=i; j++){
          dp[j]=Math.min(dp[j], dp[j + 1] )+ triangle[i][j]
      }
  }
  return dp[0]
  
};

const minTotalV2 = minimumTotalV2([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])

console.log(minTotalV2)