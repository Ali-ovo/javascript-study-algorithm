
// 时间复杂度 O(logn)
// 空间复杂度 O(logn) 递归调用栈 所以是logn
var guessNumber = function (n) {
  // 递归函数 接受一个搜索范围
  const rec = (low, high) => {
    // 递归结束条件
    if (low > high) return;

    // 获取中间元素
    const mid = (low + high) >>> 1;

    // 判断是否猜对
    const res = guess(mid)

    // 猜对
    if (res === 0) {
      return mid
    } else if (res === 1) {
      // 猜大了
      return rec(mid + 1, high)
    } else {
      // 猜小了
      return rec(low, mid - 1)
    }
  }

  return rec(1, n)
};