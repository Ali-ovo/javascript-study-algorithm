

// 时间复杂度：O(log n)
// 空间复杂度：O(1)
Array.prototype.binarySearch = function (item) {
  // 代表数组的最小索引
  let low = 0;

  // 和最大索引
  let higt = this.length - 1;


  while (low <= higt) {

    // 获取中间元素索引
    const mid = (low + higt) >> 1;
    
    const element = this[mid];

    // 如果中间元素小于于要查找的元素 就把最小索引更新为中间索引的下一个
    if (element < item) {
      low = mid + 1
    } else if (element > item) {

    // 如果中间元素大于要查找的元素 就把最大索引更新为中间索引的前一个
      higt = mid - 1;
    } else {
      // 如果中间元素等于要查找的元素 就返回索引
      return mid;
    }
  }

  return -1
}


const res = [1, 2, 3, 4, 5, 6].binarySearch(3)
