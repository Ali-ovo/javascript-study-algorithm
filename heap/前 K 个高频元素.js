class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  //  获取父节点
  getParentIndex(index) {
    // 除以二 取商
    // return Math.floor((index - 1) / 2);
    return (index - 1) >> 1;
  }

  getLeftIndex(i) {
    return (i << 1) + 1;
  }

  getRightIndex(i) {
    return (i << 1) + 2;
  }
  
 // 改造上移和下移操作即可
  shiftUp(index) {
    if (index == 0) return;
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] && this.heap[parentIndex].value > this.heap[index].value) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);

    if (this.heap[leftIndex] && this.heap[leftIndex].value < this.heap[index].value) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex)
    }

    if (this.heap[rightIndex] && this.heap[rightIndex].value < this.heap[index].value) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex)
    }
  }
  
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1)
  }

  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }

  peek() {
    return this.heap[0]
  }

  size() {
    return this.heap.length
  }

}

// nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]


// 时间复杂度 O(n * logK)
// 空间复杂度 O(k)
var topKFrequent = function (nums, k) {
  // 统计每个元素出现的频率
  const map = new Map();

  // 遍历数组 建立映射关系
  nums.forEach(n => {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  })

  // 建立最小堆
  const h = new MinHeap();

  // 遍历映射关系
  map.forEach((value, key) => {

    // 由于插入的元素结构发生了变化，所以需要对 最小堆的类进行改造一下 改造的方法我会写到最后
    h.insert({ value, key })
    if (h.size() > k) {
      h.pop()
    }
  })
  return h.heap.map(item => item.key)
};