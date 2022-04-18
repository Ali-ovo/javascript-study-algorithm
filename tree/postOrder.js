const bt = require('./bt');

// 后序遍历 递归
// const postOrder = (tree) => {
//   if (!tree) return

//   postOrder(tree.left)
//   postOrder(tree.right)
//   console.log(tree.val)
// };


// postOrder(bt)

// 后序遍历 非递归
const postOrder2 = (tree) => {
  if (!tree) return

  const stack = [tree];
  const outputStack = [];

  while (stack.length) {
    const n = stack.pop();
    outputStack.push(n)
    // 负负为正
    if (n.left) stack.push(n.left);
    if (n.right) stack.push(n.right);

  }

  while (outputStack.length) {
    const n = outputStack.pop();
    console.log(n.val);
  }
};

postOrder2(bt)
