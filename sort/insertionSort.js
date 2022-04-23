

// 时间复杂度 O(n^2)
Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i++) {
    const temp = this[i];
    let j = i;
    while (j > 0) {
      if (this[j - 1] > temp) {
        this[j] = this[j - 1];
      } else {
        break
      }
      j--;
    }
    this[j] = temp;
  }
}

const arr = [5, 3, 2, 7, 9]
arr.insertionSort();
