

// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
Array.prototype.selectionSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    let indexMin = i;

    for (let j = i; j < this.length; j++) {
      if (this[j] < this[indexMin]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      [this[i], this[indexMin]] = [this[indexMin], this[i]];
    }
  }

}

const arr = [5, 3, 2, 7, 9]
arr.selectionSort();