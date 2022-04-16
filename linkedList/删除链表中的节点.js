// 一个链表 删除其中指定的节点
// head = [4,5,1,0]; node = 5; 
// 输出 [4,1,0]

let list = {
  val: 4,
  next: {
    val: 5,
    next: {
      val: 1,
      next: {
        val: 0,
        next: null
      }
    }
  }
}

// 时间复杂和空间复杂度都是 O(1)
const deleteNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next
}

const p = list
while (list) {
  if (list.val === 5) {
    deleteNode(list)
  }
  list = list.next
}

console.log(p);
