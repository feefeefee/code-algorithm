function maximalSquare(matrix: string[][]): number {

  /**
  f(i,j)表示以(i,j)为右下角的正方形的最大边长，
  - 如果 (i,j)为“0”，以(i,j)为右下角不可能构成全为“1”的正方形f(i,j)=0，
  - 如果(i,j)为“1”，至少可以获得边长为1的正方形，还能不能变大只能向左向上扩展边长，这个时候需要看正上，左边和左上三个点，因为扩展定会将这三个相邻点包含进来，
  - 如果三个点中最小值为0，那么扩展后肯定不行，
  - 如果最小值为1，那么三个点都为1，定能扩展成边长为2的正方形，同理能扩展到最大的是 min(左，上，左上) + 1
   */

  if (matrix === null || matrix?.length < 1 || matrix[0]?.length < 1) return 0

  const height = matrix.length
  const width = matrix[0].length

  let maxSide = 0
  /**
  dp 具体定义：dp[i + 1][j + 1] 表示 「以第 i 行、第 j 列为右下角的正方形的最大边长」
  为何不是 dp[i][j]
  回到图解中，任何一个正方形，我们都「依赖」当前格 左、上、左上三个方格的情况
  但第一行的上层已经没有格子，第一列左边已经没有格子，需要做特殊 if 判断来处理
  为了代码简洁，我们 假设补充 了多一行全 '0'、多一列全 '0'
  
  - 此时 dp 数组的大小也明确为 new dp[height + 1][width + 1]
  - 初始值就是将第一列 dp[row][0] 、第一行 dp[0][col] 都赋为 0，相当于已经计算了所有的第一行、第一列的 dp 值
  
  
  
  */
  const dp = new Array(height + 1).fill(0).map(() => new Array(width + 1).fill(0))


  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j] === '1') {
        dp[i + 1][j + 1] = Math.min(dp[i + 1][j], dp[i][j + 1], dp[i][j]) + 1
        maxSide = Math.max(maxSide, dp[i + 1][j + 1])
      }


    }
  }

  return maxSide * maxSide

};