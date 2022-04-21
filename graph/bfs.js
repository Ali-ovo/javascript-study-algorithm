const graph = require("./graph.js");

const visited = new Set();

const q = [2];
visited.add(2)
const bfs = (n) => {
  while (q.length) {
    const n = q.shift();
    console.log(n);
    graph[n].forEach(c => {
      if (!visited.has(c)) {
        q.push(c)
        visited.add(c)

      }
    })
  }
}
 
bfs()