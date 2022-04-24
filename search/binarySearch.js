

// 时间复杂度：O(log n)
// 空间复杂度：O(1)
Array.prototype.binarySearch = function (item) {
  let low = 0;
  let higt = this.length - 1;
  while (low <= higt) {
    const mid = (low + higt) >> 1;

    const element = this[mid];
    if (element < item) {
      low = mid + 1
    } else if (element > item) {
      higt = mid - 1;
    } else {
      return mid;
    }
  }

  return -1
}


const res = [1, 2, 3, 4, 5, 6].binarySearch(3)
