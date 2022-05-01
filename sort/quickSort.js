


// 时间复杂度 O(nlogN)
// 空间复杂度 O(1)
Array.prototype.quickSort = function () {
  const rec = (arr) => {
    // 如果数组长度小于等于1 就不用排序了
    if (arr.length <= 1) { return arr }

    // 存放基准前后的数组
    const left = [];
    const right = [];

    // 取基准
    const mid = arr[0];

    for (let i = 1; i < arr.length; i++) {

      // 如果当前值小于基准就放到基准前数组里面
      if (arr[i] < mid) {
        left.push(arr[i]);
      } else {

        // 否则就放到基准后数组里面
        right.push(arr[i]);
      }
    }

    // 递归调用两边的子数组
    return [...rec(left), mid, ...rec(right)];
  };

  const res = rec(this);
  res.forEach((n, i) => this[i] = n);
}

const arr = [5, 3, 2, 7, 9]
arr.quickSort();
