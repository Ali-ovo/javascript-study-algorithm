var RecentCounter = function () {
  // 初始化队列
  this.q = [];
};

// 输入 inputs = [[],[1],[100],[3001],[3002]] 请求间隔为 3000ms
// 输出 outputs = [null,1,2,3,3]   

// 时间复杂度 O(n) n为剔出老请求的长度
// 空间复杂度 O(n) n为最近请求的次数
RecentCounter.prototype.ping = function (t) {
  // 如果传入的时间小于等于最近请求的时间，则直接返回0
  if (!t) return null

  // 将传入的时间放入队列
  this.q.push(t);

  // 如果队头小于 t - 3000 则剔除队头
  while (this.q[0] < t - 3000) {
    this.q.shift();
  }

  // 返回最近请求的次数
  return this.q.length;
};




var inputs = [[], [1], [100], [3001], [3002]]
var outputs = []
var obj = new RecentCounter()

for (let i = 0; i < inputs.length; i++) {
  const param = obj.ping(inputs[i][0])
  outputs.push(param)
}

console.log(outputs);