

// 时间复杂度O(n) n为链表1和链表2的长度之和
// 空间复杂度O(1)
var mergeTwoLists = function (list1, list2) {

  // 新建一个新链表 作为返回值
  const res = {
    val: 0,
    next: null
  }

  // 指向新链表的指针
  let p = res;

  // 建立两个指针
  let p1 = list1;
  let p2 = list2;


  // 遍历两个链表
  while (p1 && p2) {

    // 如果链表1 小于 链表2的值 就接入链表1的值
    if (p1.val < p2.val) {
      p.next = p1;

      // 需要往后移动
      p1 = p1.next;
    } else {

      // 否则接入链表2的值
      p.next = p2;

      // 需要往后移动
      p2 = p2.next;
    }

    // p永远要往后移动一位
    p = p.next;
  }

  // 如果链表1或者链表2还有值,就把后面的值全部接入新链表
  if (p1) {
    p.next = p1;
  }
  if (p2) {
    p.next = p2;
  }

  return res.next;
};



