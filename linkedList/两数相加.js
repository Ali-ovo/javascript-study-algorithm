// (2 -> 4 -> 3) + (5 -> 6 -> 4)
// 7 -> 0 -> 8

const list1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null
    }
  }
}

const list2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null
    }
  }
}




// 时间复杂度 O(n) n为两个链表中较长的长度
// 空间复杂度 O(n) 同样 n 为两个链表中较长的长度
var addTowNumbers = (l1, l2) => {
  // 初始化一个链表
  const l3 = {
    val: 0,
    next: null
  };

  // 取出两个链表来进行遍历
  let p1 = l1;
  let p2 = l2;
  let p3 = l3;

  // 用来存放进位
  let carry = 0;

  while (p1 || p2) {
    const v1 = p1 ? p1.val : 0;
    const v2 = p2 ? p2.val : 0;

    const val = v1 + v2 + carry;

    carry = Math.floor(val / 10)

    p3.next = {
      val: val % 10,
      next: null
    }

    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
    p3 = p3.next;
  }

  if (carry) {
    p3.next = {
      val: carry,
      next: null
    }
  }

  return l3.next
}


addTowNumbers(list1, list2) // 7 -> 0 -> 8