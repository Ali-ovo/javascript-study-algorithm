


// 时间复杂度 O(n) n是楼梯长度
// 空间复杂度 O(1)
var climbStairs = function (n) {
  if (n < 2) return 1

  let dp0 = 1;
  let dp1 = 1

  for (let i = 2; i <= n; i++) {
    // [dp0, dp1] = [dp1, dp1 + dp0]
    const temp = dp0;
    dp0 = dp1;
    dp1 = do1 + temp
  }

  return dp1
}; 