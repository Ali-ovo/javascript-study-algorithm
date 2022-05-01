// 生成数字图 只有状态为 3 5 6的时候才为一个数字
const graph = {
  0: { 'blank': 0, 'sign': 1, ".": 2, "digit": 6 },
  1: { "digit": 6, ".": 2 },
  2: { "digit": 3 },
  3: { "digit": 3, "e": 4 },
  4: { "digit": 5, "sign": 7 },
  5: { "digit": 5 },
  6: { "digit": 6, ".": 3, "e": 4 },
  7: { "digit": 5 },
}


// 时间复杂度 O(n) n是字符串长度
// 空间复杂度 O(1) 
var isNumber = function (s) {

  // 记录状态
  let state = 0;

  // 遍历字符串
  for (c of s.trim()) {
    // 把字符进行转换
    if (c >= '0' && c <= '9') {
      c = 'digit';
    } else if (c === " ") {
      c = 'blank';
    } else if (c === "+" || c === "-") {
      c = "sign";
    } else if (c === "E" || c === "e") {
      c = "e";
    }

    // 开始寻找图
    state = graph[state][c];

    // 如果最后是undefined就是错误
    if (state === undefined) return false
  }

  // 判断最后的结果是不是合法的数字
  if (state === 3 || state === 5 || state === 6) return true
  return false
}; 