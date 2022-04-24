
// 时间复杂度 O(logn)
// 空间复杂度 O(1)
var guessNumber = function (n) {
  const low = 1;
  const high = n;

  while (low <= high) {
    // const mid = (low + high) >>> 1;
    const mid = Math.floor((low + high) / 2);;
    const res = guess(mid);
    if (res === 0) {
      return mid
    } else if (res === 1) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
};


guessNumber(10);