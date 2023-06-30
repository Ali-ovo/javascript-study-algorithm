const bt = require('./bt')

// 中序遍历 递归
const inOrder = (tree) => {
  if (!tree) return
  inOrder(tree.left)
  console.log(tree.val)
  inOrder(tree.right)
}

// inOrder(bt)
// 中序遍历 非递归
const inOrder2 = (tree) => {
  if (!tree) return

  // 新建一个栈
  const stack = []

  // 先遍历所有的左节点
  let p = tree
  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }

    const n = stack.pop()
    console.log(n.val)

    p = n.right
  }
}

inOrder2(bt)
