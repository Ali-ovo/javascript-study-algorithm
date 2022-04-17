// 用字典优化

const isValid = (s) => {

  // 如果长度不等于2的倍数肯定不是一个有效的括号
  if (s.length % 2 !== 0) return false

  // 创建一个字典
  const map = new Map();
  map.set('(', ')');
  map.set('{', '}');
  map.set('[', ']');

  // 创建一个栈
  const stack = [];

  // 遍历字符串
  for (let i = 0; i < s.length; i++) {

    // 取出字符
    const c = s[i];


    // 如果是左括号就入栈
    if (map.has(c)) {
      stack.push(c)
    } else {

      // 取出栈顶
      const t = stack[stack.length - 1];

      // 如果字典中有这个值 就出栈
      if (map.get(t) === c) {
        stack.pop();
      } else {

        // 否则就不是一个有效的括号
        return false
      }

    }

  }

  return stack.length === 0;
};



isValid('({})')