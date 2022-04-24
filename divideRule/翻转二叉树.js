
// 时间复杂度 O(n) n为树的节点数量
// 空间复杂度 O(h) h为树的高度
var invertTree = function (root) {
  if (!root) return null
  return {
    val: root.val,
    left: invertTree(root.right),
    right: invertTree(root.left)
  }
};