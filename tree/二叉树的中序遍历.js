
// 时间复杂度 O(n) n为树的节点数
// 空间复杂度 O(n)
var inorderTraversal = function (root) {
  // if (!root) return [];
  // let res = []
  // const refc = (n) => {
  //   if (!n) return;
  //   refc(n.left)
  //   res.push(n.val)
  //   refc(n.right)
  // }
  // refc(root)
  // return res



  if (!root) return [];
  let res = []

  // 新建一个栈
  const stack = [];

  // 先遍历所有的左节点
  let p = root;
  while (stack.length || p) {

    while (p) {
      stack.push(p)
      p = p.left
    }

    const n = stack.pop();
    res.push(n.val);
    p = n.right;
  }

  return res
};