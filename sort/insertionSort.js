

// 时间复杂度 O(n^2)
Array.prototype.insertionSort = function () {

  // 遍历数组 从第二个开始
  for (let i = 1; i < this.length; i++) {

    // 获取第二个元素
    const temp = this[i];

    let j = i;
    while (j > 0) {

      // 如果当前元素小于前一个元素 就开始往后移动
      if (this[j - 1] > temp) {
        this[j] = this[j - 1];
      } else {

        // 否则就跳出循环
        break
      }

      // 递减
      j--;
    }

    // 前一位置赋值为当前元素
    this[j] = temp;
  }
}

const arr = [5, 3, 2, 7, 9]
arr.insertionSort();
