


// 时间复杂度O(n) n是树的节点数量
// 空间复杂度O(n) n是树的节点数量
var minDepth = function (root) {
  if (!root) return 0
  const q = [[root, 1]];

  while (q.length) {
    const [n, l] = q.shift();
    console.log(n.val, l);
    if (!n.left && !n.right) return l
    if (n.left) q.push([n.left, l + 1]);
    if (n.right) q.push([n.right, l + 1]);
  }

}

