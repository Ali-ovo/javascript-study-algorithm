

// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
Array.prototype.selectionSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    let indexMin = i;

    for (let j = i; j < this.length; j++) {

      // 如果当前这个元素 小于最小值的下标 就更新最小值的下标
      if (this[j] < this[indexMin]) {
        indexMin = j;
      }
    }
    

    // 避免自己和自己进行交换
    if (indexMin !== i) {

      // 进行交换数据
      [this[i], this[indexMin]] = [this[indexMin], this[i]];
    }
  }

}

const arr = [5, 3, 2, 7, 9]
arr.selectionSort();