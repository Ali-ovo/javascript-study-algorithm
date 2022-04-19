// 时间复杂度 O(n) n为树的节点数
// 空间复杂度 O(n) n为递归调用的栈的大小
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let flag = false
  const dfs = (n, s) => {
    if (!n.left && !n.right && s === targetSum) flag = true
    if (n.left) dfs(n.left, s + n.left.val);
    if (n.right) dfs(n.right, s + n.right.val);
  }

  dfs(root, root.val)

  return flag
};