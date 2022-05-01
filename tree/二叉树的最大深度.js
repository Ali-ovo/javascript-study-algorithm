


// 时间复杂度 O(n) n为树的节点数
// 空间复杂度 有一个递归调用的栈 所以为 O(n) n也是为二叉树的最大深度
var maxDepth = function (root) {
  let res = 0;
    
  // 使用深度优先遍历
  const dfs = (n, l) => {
    if (!n) return;
    if (!n.left && !n.right) {
     // 没有叶子节点就把深度数量更新
      res = Math.max(res, l);
    }
    dfs(n.left, l + 1)
    dfs(n.right, l + 1)
  }

  dfs(root, 1)

  return res
}

