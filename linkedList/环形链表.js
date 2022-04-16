// 3 -> 2 -> 0 -> -4   pos = 1
// 使用整数pos来表示链表尾链接到链表的位置 索引从 0 开始 如果 pos 是-1 则在链表中没有环


// 时间复杂度 O(n) n为链表的长度
// 空间复杂度 O(1)
const hasCycle = (head) => {
  let p1 = head;
  let p2 = head;
  while (p1 && p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 === p2) {
      return true
    }

  }
  return false
}

