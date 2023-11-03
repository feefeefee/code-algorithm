function calculateMinimumHP(dungeon: number[][]): number {
    // 死亡条件 《= 0
    // 从右下到坐上倒推回去，只要路径和 >=1 

    // f(x)(y) = 从坐标（x,y）到终点所需要的最小初始值
    // 条件： f(x)(y) >= 1

    // 上一格f(x+1)(y)
    // 左一格f(x)(y+1)
    // 两条路最小值 min = min(f(x+1)(y),f(x)(y+1))
    // 公主格子的值： G(x,y)
    //最终 f(x,y) = max(min(f(x + 1,y), f(x, y + 1) - G(x, y) , 1))

    // 边界条件 网格是1X1的

    let n: number = dungeon.length;
    let m: number = dungeon[0].length;
    let dp: number[][] = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

    for (let i: number = 0; i <= n; ++i) {
        dp[i].fill(Number.MAX_VALUE);
    }

   
    
    dp[n][m - 1] = dp[n - 1][m] = 1;

 
    
    for (let i: number = n - 1; i >= 0; --i) {
        for (let j: number = m - 1; j >= 0; --j) {
            let minn: number = Math.min(dp[i + 1][j], dp[i][j + 1]);
            dp[i][j] = Math.max(minn - dungeon[i][j], 1);
        }
    }
    return dp[0][0];

};

const dungeon = calculateMinimumHP([[-2, -3, 3], [-5, -10, 1], [10, 30, -5]])

