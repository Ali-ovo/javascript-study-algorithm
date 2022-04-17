// 3 -> 2 -> 0 -> -4   pos = 1
// 使用整数pos来表示链表尾链接到链表的位置 索引从 0 开始 如果 pos 是-1 则在链表中没有环


// 时间复杂度 O(n) n为链表的长度
// 空间复杂度 O(1)
const hasCycle = (head) => {
  // 用两个指针遍历链表
  let p1 = head;
  let p2 = head;

  // 先判断两个指针链表是否为空  
  // 第二个指针会比第一个指针快  如果两个指针相逢就肯定是有环的
  while (p1 && p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 === p2) {
      return true
    }

  }

  // 否则就是没有环
  return false
}

