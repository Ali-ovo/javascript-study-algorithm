
// 时间复杂度 O(logn)
// 空间复杂度 O(logn)
var guessNumber = function (n) {
  const rec = (low, high) => {
    if (low > high) return;

    const mid = (low + high) >>> 1;

    const res = guess(mid)

    if (res === 0) {
      return mid
    } else if (res === 1) {
      return rec(mid + 1, high)
    } else {
      return rec(low, mid - 1)
    }
  }

  return rec(1, n)
};