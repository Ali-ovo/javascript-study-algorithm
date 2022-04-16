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
  let p = head;
  while (p && p.next) {
    if (p.val === p.next.val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }
  return head
}


deleteDuplicates(list)

console.log(list);