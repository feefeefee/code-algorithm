function wordBreak(s: string, wordDict: string[]): boolean {
  /**
  - s 串能否分解为单词表的单词（前 s.length 个字符的 s 串能否分解为单词表单词）
  - 将大问题分解为规模小一点的子问题：
    - 前 i 个字符的子串，能否分解成单词
    - 剩余子串，是否为单个单词。
- 
  
   */


  // 1. 确定dp数组以及下标的含义
  // dp[i] : 字符串长度为i的话，dp[i]为true，表示可以拆分为一个或多个在字典中出现的单词。

  // 2. 确定递推公式
  // 如果确定dp[j] 是true，且 [j, i] 这个区间的子串出现在字典里，那么dp[i]一定是true。（j < i ）。
  // 所以递推公式是 if([j, i] 这个区间的子串出现在字典里 && dp[j]是true) 那么 dp[i] = true。

  //3.dp数组如何初始化
  /*
  从递推公式中可以看出，dp[i] 的状态依靠 dp[j]是否为true，那么dp[0]就是递推的根基，dp[0]一定要为true，否则递推下去后面都都是false了。

  那么dp[0]有没有意义呢？

  dp[0]表示如果字符串为空的话，说明出现在字典里。

  但题目中说了“给定一个非空字符串 s” 所以测试数据中不会出现i为0的情况，那么dp[0]初始为true完全就是为了推导公式。

  下标非0的dp[i]初始化为false，只要没有被覆盖说明都是不可拆分为一个或多个在字典中出现的单词。


   */

  //4. 确定遍历顺序
  /**
  题目中说是拆分为一个或多个在字典中出现的单词，所以这是完全背包。
   */
  const dp: boolean[] = new Array(s.length + 1).fill(false);

  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const tempStr: string = s.slice(j, i);
      if (wordDict.includes(tempStr) && dp[j] === true) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}


