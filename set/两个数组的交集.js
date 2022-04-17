// nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]


// 时间复杂度 O(n^2) 数组长度
// 空间复杂度 O(n)  n为去重后的数组长度
const intersection = (nums1, nums2) => {

  // 通过数组的filter选出交集
  // 然后通过 Set集合 去重 并生成数组
  return [...new Set(nums1.filter(item => nums2.includes(item)))];
}

intersection([1, 2, 2, 1], [2, 2]); // [2]