function tribonacci(n: number): number {
  // f(x) = f(x-3) + f(x-2) + f(x-1)

  const dp = new Array(n).fill(0)

  dp[0] = 0
  dp[1] = 1
  dp[2] = 1
  // dp[3] = dp[0] + do[1] + dp[2]
  // dp[4] = dp[1] + dp[2] + dp[3]
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1]
  }

  return dp[n]
};

function tribonacciV2(n: number): number {
  // f(x) = f(x-3) + f(x-2) + f(x-1)

  if (n == 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }

  let p = 0
  let q = 0
  let r = 1
  let s = 1
  for (let i = 3; i <= n; i++) {
    p = q;
    q = r;
    r = s;
    s = p + q + r;

  }

  return s
};