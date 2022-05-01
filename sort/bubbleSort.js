
// 时间复杂度 O(n^2) 
// 空间复杂度 O(1)
Array.prototype.bubbleSort = function () {
  for (i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (this[j] > this[j + 1]) {
      
        // 交换数据
        [this[j], this[j + 1]] = [this[j + 1], this[j]];
      }
    }
  }
}

const arr = [5, 3, 2, 7, 9]
arr.bubbleSort();