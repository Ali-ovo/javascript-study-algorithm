


// 时间复杂度 O(nlogn)
// 空间复杂度 O(n)
Array.prototype.mergeSort = function () {

  const rec = (arr) => {
    // 递归终点
    if (arr.length === 1) return arr

    // 获取中间索引
    const mid = arr.length >> 1;

    // 通过中间下标,进行分割数组
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // 左边和右边的数组进行递归,会得到有序的左数组,和有序的右数组
    const orderLeft = rec(left);
    const orderRight = rec(right);


    // 存放结果的数组
    const res = [];

  
    while (orderLeft.length || orderRight.length) {

      // 如左边和右边数组都有值
      if (orderLeft.length && orderRight.length) {

        // 左边队头的值小于右边队头的值 就左边队头出队,否则就是右边队头出队
        res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
      } else if (orderLeft.length) {

        // 把左边的队头放入数组
        res.push(orderLeft.shift())
      } else if (orderRight.length) {

        // 把右边的队头放入数组
        res.push(orderRight.shift())
      }
    }

    return res
  }

  const res = rec(this)

  // 把结果放入原数组
  res.forEach((n, i) => this[i] = n)
}

const arr = [5, 3, 2, 7, 9]
arr.mergeSort();
