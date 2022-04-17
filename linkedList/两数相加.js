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

  // 初始化一个新链表的指针
  let p3 = l3;

  // 用来存放进位
  let carry = 0;

  // 遍历两个链表
  while (p1 || p2) {
    // 两个链表有可能长度不一样 需要判断给一个初始值
    const v1 = p1 ? p1.val : 0;
    const v2 = p2 ? p2.val : 0;
    

    // 计算两个链表当前节点的和
    const val = v1 + v2 + carry;

    // 如果大于10需要进行进位存储
    carry = Math.floor(val / 10)

    // 将当前节点的值存入新链表
    p3.next = {
      val: val % 10,
      next: null
    }

    // 将两个链表的指针向后移动
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;

    // 将新链表的指针向后移动
    p3 = p3.next;
  }

  // 如果进位有值 需要将进位加入到新链表中
  if (carry) {
    p3.next = {
      val: carry,
      next: null
    }
  }

  // 返回新链表
  return l3.next
}


addTowNumbers(list1, list2) // 7 -> 0 -> 8