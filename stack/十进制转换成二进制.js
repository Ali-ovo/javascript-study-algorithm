// 十进制转为二进制

// 时间复杂度 O(n) n为dec二进制的长度
// 空间复杂度 O(n) n为dec二进制的长度
const dec2bin = (dec) => {
  // 创建一个字符串
  let res = "";

  // 创建一个栈
  let stack = []

  // 遍历数字 如果大于0 就可以继续转换2进制
  while (dec > 0) {
    // 将数字的余数入栈
    stack.push(dec % 2);

    // 除以2
    dec = Math.floor(dec / 2);
  }

  // 取出栈中的数字
  while (stack.length) {
    res += stack.pop();
  }

  返回这个字符串
  return res;
};

console.log(dec2bin(254));