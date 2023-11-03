function minDistance(word1: string, word2: string): number {
 // dp[i][j] 表示以下标i-1为结尾的字符串word1，和以下标j-1为结尾的字符串word2，最近编辑距离为dp[i][j]。
/*if (word1[i - 1] == word2[j - 1])
    不操作
if (word1[i - 1] != word2[j - 1])
    增
    删
    换
*/    
 
 // 边界情况，一个空串和一个非空串的编辑距离为 D[i][0] = i 和 D[0][j] = j，D[i][0] 相当于对 word1 执行 i 次删除操作，D[0][j] 相当于对 word1执行 j 次插入操作。
 
 const n = word1.length
 const m = word2.length
 
 // 边界情况，其中有一个字符串为空数组
 if( n * m === 0 ){
   return n + m
 }  
 
 const dp  = new Array( n + 1).fill(0).map(() => new Array(m + 1).fill(0))
 
 for(let i = 0; i <= n; i++){
   dp[i][0] = i
 }
 
 for(let j = 0; j <= m ;j++){
   dp[0][j] = j 
 }
 
 for (let i = 1; i <= n; i++){
   for(let j = 1; j <= m; j++){
     if(word1[i-1] === word2[j-1]){
       dp[i][j] = dp[i - 1][j - 1]
     }else {
       dp[i][j] = Math.min(dp[i - 1][j],dp[i][j - 1],dp[i - 1][j - 1]) + 1
     }
 
   }
 }
 
 
 return dp[n][m]
 
 
 };