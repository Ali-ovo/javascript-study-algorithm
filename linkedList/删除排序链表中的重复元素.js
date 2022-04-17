// 1 -> 1 -> 2 -> 3 -> 3 
const list = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 3,
          next: null
        }
      }
    }
  }
}


// 时间复杂度 O(n) n为链表的长度
// 空间复杂度 O(1)
const deleteDuplicates = (head) => {

  // 创建一个指针
  let p = head;

  // 遍历链表
  while (p && p.next) {

    // 如果当前节点的值等于下一个节点的值
    if (p.val === p.next.val) {

      // 删除下一个节点
      p.next = p.next.next
    } else {

      // 否则继续遍历
      p = p.next
    }
  }

  //  最后返回原来链表
  return head
}


deleteDuplicates(list)

console.log(list);