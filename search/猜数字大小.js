
// 时间复杂度 O(logn) 分割成两半的 基本都是logn
// 空间复杂度 O(1)
var guessNumber = function (n) {

  // 定义范围最小值和最大值
  const low = 1;
  const high = n;

  while (low <= high) {

    // 获取中间值
    const mid = (low + high) >>> 1;

    // 这个方法是 leetcode 中的方法
    // 如果返回值为-1 就是小了
    // 如果返回值为1  就是大了
    // 如果返回值为0  就是找到了 
    const res = guess(mid);

    // 剩下的操作就和二分搜索一样
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