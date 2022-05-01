const graph = require("./graph.js");

const visited = new Set();
// 新建一个队列， 根节点入队， 设2为根节点

const q = [2];
visited.add(2)
while (q.length) {

  // 队头出队，并访问
  const n = q.shift();
  console.log(n);
  graph[n].forEach(c => {

    // 对头没访问过的相邻节点入队
    if (!visited.has(c)) {
      q.push(c)
      visited.add(c)
    }
  })
}

bfs()