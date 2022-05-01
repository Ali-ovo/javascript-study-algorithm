const graph = require("./graph.js");

// 记录节点是否访问过
const visited = new Set();
const dfs = (n) => {
  visited.add(n);

  // 遍历相邻节点
  graph[n].forEach(c => {
    // 没访问过才可以，进行递归访问
    if (!visited.has(c)) {
      dfs(c)
    }
  });
}

// 从2开始进行遍历
dfs(2)