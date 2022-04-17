// 输入abcabcbb  输出3


// 时间复杂度 O(n) n为s的length
// 空间复杂度 O(m) m为字符串中不重复字符的个数
var lengthOfLongestSubstring = function (s) {
  // 左指针
  let l = 0;

  // 右指针
  let res = 0;

  // 建立字典
  const map = new Map();

  for (let r = 0; r < s.length; r++) {

    // 如果字典中有这个字符串  并且当前字符的位置在窗口内 就移动左指针 
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      l = map.get(s[r]) + 1;
    }

    // 右指针不断的滑动
    res = Math.max(res, r - l + 1);

    // 把字符存入字典
    map.set(s[r], r);

  }

  return res
};

console.log(lengthOfLongestSubstring('abbcdea'));