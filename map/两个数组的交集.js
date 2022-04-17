// nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]

// 用字典来实现
// 时间复杂度 O(m + n) m为nums1长度 n为nums2长度
// 空间复杂度 O(m) 
const intersection = (nums1, nums2) => {
  // 创建一个字典
  const map = new Map();

  // 将数组1中的数字放入字典
  nums1.forEach(n => map.set(n, true));

  // 创建一个新数组
  const res = [];

  // 将数组2遍历 并判断是否在字典中
  nums2.forEach(n => {
    if (map.has(n)) {
      res.push(n);

      // 如果在字典中，则删除该数字
      map.delete(n);
    }
  })

  return res;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));