var RecentCounter = function () {
  this.q = [];
};

// 时间复杂度 O(n) n为剔出老请求的长度
// 空间复杂度 O(n) n为最近请求的次数
RecentCounter.prototype.ping = function (t) {
  if (!t) return null
  this.q.push(t);
  while (this.q[0] < t - 3000) {
    this.q.shift();
  }

  return this.q.length;
};


// 输入 inputs = [[],[1],[100],[3001],[3002]]
// 输出 outputs = [null,1,2,3,3] 

var inputs = [[], [1], [100], [3001], [3002]]
var outputs = []
var obj = new RecentCounter()

for (let i = 0; i < inputs.length; i++) {
  const param = obj.ping(inputs[i][0])
  outputs.push(param)
}

console.log(outputs);