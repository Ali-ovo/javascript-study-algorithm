// 十进制转为二进制

// 时间复杂度 O(n) n为dec二进制的长度
// 空间复杂度 O(n) n为dec二进制的长度
const dec2bin = (dec) => {
  let res = "";
  let stack = []
  while (dec > 0) {
    stack.push(dec % 2);
    dec = Math.floor(dec / 2);
  }
  while (stack.length) {
    res += stack.pop();
  }
  return res;
};

console.log(dec2bin(254));