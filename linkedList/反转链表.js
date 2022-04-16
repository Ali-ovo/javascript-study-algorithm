// 1 -> 2-> 3 -> 4 -> 5 -> null
// 5 -> 4 -> 3 -> 2 -> 1 -> null
// 反转链表

const list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}

// 时间复杂度 O(n) n为链表的长度
// 空间复杂度 O(1)
var reverseList = function (head) {
  let p1 = head;
  let p2 = null;
  while (p1) {
    const tmp = p1.next;
    p1.next = p2;
    p2 = p1;
    p1 = tmp;
  }

  return p2;
}

reverseList(list)