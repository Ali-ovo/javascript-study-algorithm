const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: [],
        },
        {
          val: "e",
          children: [],
        }
      ],
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: [],
        },
        {
          val: "g",
          children: [],
        }
      ],
    }
  ],
}

// 广度优先遍历
const bfs = (tree) => {
  const q = [tree];

  while (q.length > 0) {
    const n = q.shift()
    console.log(n.val);
    n.children.forEach(c => q.push(c))
  }
};

bfs(tree);