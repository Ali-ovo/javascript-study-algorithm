
function fib(n) {
  let dp = [0, 1, 1];
  for (let i = 3; i <= n; i++) {

    // 当前值等于前两个值之和
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}