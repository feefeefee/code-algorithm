function maxProfit(prices: number[]): number {
  // 贪心
  let resProfit: number = 0;
  for (let i = 1, length = prices.length; i < length; i++) {
    if (prices[i] > prices[i - 1]) {
      resProfit += prices[i] - prices[i - 1];
    }
  }
  return resProfit

};

function maxProfitV2(prices: number[]): number {
  // 贪心
  let ans = 0;
  let n = prices.length;
  for (let i = 1; i < n; ++i) {
    ans += Math.max(0, prices[i] - prices[i - 1]);
  }
  return ans;


}