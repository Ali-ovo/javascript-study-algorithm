const bt = require("./bt.js")


// 先序遍历 递归
const preOrder = (tree) => {
  if (!tree) return

  console.log(tree.val);

  preOrder(tree.left);
  preOrder(tree.right);
}



// 先序遍历 非递归
const preOrder2 = (tree) => {
  if (!tree) return

  // 新建一个栈
  const stack = [tree];

  while (stack.length > 0) {
    const n = stack.pop();
    console.log(n.val);

    // 负负为正
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);

  }

}

preOrder(bt)
preOrder2(bt)