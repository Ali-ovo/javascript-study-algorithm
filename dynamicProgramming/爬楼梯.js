
// 正在爬楼梯, 需要n阶才能到达楼顶
// 每次只能爬 1 或者 2 个台阶, 有多少中不同的方法可以到达楼顶

// 时间复杂度 O(n) n是楼梯长度
// 空间复杂度 O(1)
var climbStairs = function (n) {
    if (n < 2) return 1

    let dp0 = 1;
    let dp1 = 1

    for (let i = 2; i <= n; i++) {
        [dp0, dp1] = [dp1, dp1 + dp0]
    }

    return dp1
};

console.log(climbStairs(3));
