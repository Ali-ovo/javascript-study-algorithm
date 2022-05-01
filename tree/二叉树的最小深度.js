


// 时间复杂度O(n) n是树的节点数量
// 空间复杂度O(n) n是树的节点数量
var minDepth = function (root) {
  if (!root) return 0
  
  // 使用广度优先遍历
  const q = [[root, 1]];

  while (q.length) {
    // 取出当前节点
    const [n, l] = q.shift();
    
    // 如果是叶子节点直接返回深度就可
    if (!n.left && !n.right) return l
    if (n.left) q.push([n.left, l + 1]);
    if (n.right) q.push([n.right, l + 1]);
  }

}

