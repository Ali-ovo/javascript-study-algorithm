

// 时间复杂度O(n) n为s的length
// 空间复杂度O(n) n也是为s的length
const isValid = (s) => {

  // 如果长度不等于2的倍数肯定不是一个有效的括号
  if (s.length % 2 === 1) return false;

  // 创建一个栈
  let stack = [];

  // 遍历字符串
  for (let i = 0; i < s.length; i++) {

    const c = s[i];

    // 如果是左括号就入栈
    if (c === '(' || c === "{" || c === "[") {
      stack.push(c);
    } else {

      // 如果不是左括号 且栈为空 肯定不是一个有效的括号 返回false
      if (!stack.length) return false

      // 拿到最后一个左括号
      const top = stack[stack.length - 1];

      // 如果是右括号和左括号能匹配就出栈
      if ((top === "(" && c === ")") || (top === "{" && c === "}") || (top === "[" && c === "]")) {
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






