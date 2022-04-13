const isValid = (s) => {
  if (s.length % 2 === 1) return false;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '(' || c === "{" || c === "[") {
      stack.push(c);
    } else {
      if (!stack.length) return false

      const top = stack[stack.length - 1];
      if ((top === "(" && c === ")") || (top === "{" && c === "}") || (top === "[" && c === "]")) {
        stack.pop();
      } else {
        return false
      }
    }

  }

  return stack.length === 0;
};

console.log(isValid('({})'));






