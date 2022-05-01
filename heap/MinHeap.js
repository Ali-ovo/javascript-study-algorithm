// js实现最小堆类
class MinHeap {
  constructor() {
    // 元素容器
    this.heap = [];
  }

  // 交换节点的值
  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
  }

  //  获取父节点
  getParentIndex(index) {
    // 除以二 取商
    return (index - 1) >> 1;
  }

  // 获取左侧节点索引
  getLeftIndex(i) {
    return (i << 1) + 1;
  }

  // 获取右侧节点索引
  getRightIndex(i) {
    return (i << 1) + 2;
  }


  // 上移
  shiftUp(index) {
    if (index == 0) return;

    // 获取父节点
    const parentIndex = this.getParentIndex(index);

    // 如果父节点的值大于当前节点的值 就需要进行交换
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);

      // 然后继续上移
      this.shiftUp(parentIndex);
    }
  }

  // 下移
  shiftDown(index) {
    // 获取左右节点索引
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);

    // 如果左子节点小于当前的值
    if (this.heap[leftIndex] < this.heap[index]) {

      // 进行节点交换
      this.swap(leftIndex, index);

      // 继续进行下移
      this.shiftDown(leftIndex)
    }

    // 如果右侧节点小于当前的值
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex)
    }
  }

  // 插入元素
  insert(value) {
    // 插入到堆的底部
    this.heap.push(value);

    // 然后上移： 将这个值和它的父节点进行交换，知道父节点小于等于这个插入的值
    this.shiftUp(this.heap.length - 1)
  }

  // 删除堆项
  pop() {

    // 把数组最后一位 转移到数组头部
    this.heap[0] = this.heap.pop();

    // 进行下移操作
    this.shiftDown(0);
  }

  // 获取堆顶元素
  peek() {
    return this.heap[0]
  }

  // 获取堆大小
  size() {
    return this.heap.length
  }

}

const h = new MinHeap();

h.insert(3);
h.insert(2);
h.insert(1);
h.pop()
h.peek()
h.size()
