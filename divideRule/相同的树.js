
// 时间复杂度 o(n) n为树的节点数量
// 空间复杂度 o(h) h为树的节点数
var isSameTree = function (p, q) {
  if (!p && !q) return true
  if (p && q && p.val === q.val
    && isSameTree(p.left, q.left)
    && isSameTree(p.right, q.right)) return true
  return false
};