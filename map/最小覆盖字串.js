// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"


// 时间复杂度 O(m+n) m是t的长度 n是s的长度
// 空间复杂度 O(k) k是字符串中不重复字符的个数
var minWindow = function (s, t) {
  // 定义双指针维护一个滑动窗口
  let l = 0;
  let r = 0;

  // 建立一个字典
  const need = new Map();

  //  遍历t
  for (const c of t) {
    need.set(c, need.has(c) ? need.get(c) + 1 : 1)
  }

  let needType = need.size

  // 记录最小子串
  let res = ""

  // 移动右指针
  while (r < s.length) {
    // 获取当前字符
    const c = s[r];

    // 如果字典里有这个字符
    if (need.has(c)) {
      // 减少字典里面的次数
      need.set(c, need.get(c) - 1);


      // 减少需要的值
      if (need.get(c) === 0) needType -= 1;
    }

    // 如果字典中所有的值都为0了 就说明找到了一个最小子串
    while (needType === 0) {
      // 取出当前符合要求的子串
      const newRes = s.substring(l, r + 1)

      // 如果当前子串是小于上次的子串就进行覆盖
      if (!res || newRes.length < res.length) res = newRes;

      // 获取左指针的字符
      const c2 = s[l];

      // 如果字典里有这个字符
      if (need.has(c2)) {
        // 增加字典里面的次数
        need.set(c2, need.get(c2) + 1);

        // 增加需要的值
        if (need.get(c2) === 1) needType += 1;
      }
      l += 1;
    }

    r += 1;

  }

  return res
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));