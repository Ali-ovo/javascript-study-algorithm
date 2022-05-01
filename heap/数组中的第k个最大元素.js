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

  shiftUp(index) {
    if (index == 0) return;
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }

  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);

    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex)
    }

    if (this.heap[rightIndex] < this.heap[index]) {
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


// 输入 [3,2,1,5,6,4] 和 k = 2
// 输出 5

// 时间复杂度 O(n * logK)
// 空间复杂度 O(K)
var findKthLargest = function (nums, k) {

  // 使用上面js实现的最小堆类，来构建一个最小堆
  const h = new MinHeap();
  
  // 遍历数组
  nums.forEach(n => {
    
    // 把数组中的值依次插入到堆里
    h.insert(n);
    
    // 最小堆只能存放两个值
    if (h.size() > k) {
      // 进行优胜劣汰
      h.pop();
    }
  })

  return h.peek()
};

findKthLargest([3, 2, 1, 5, 6, 4], 2)