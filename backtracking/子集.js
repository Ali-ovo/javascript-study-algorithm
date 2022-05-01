// 输入 [1,2,3]
// 输出 [ [3], [1], [2], [1,2,3], [1,3], [2,3], [1,2], [] ]

// 时间复杂度 O(2 ^ N) 每个元素都有两种可能
// 空间复杂度 O(N)
var subsets = function (nums) {
  // 存放结果数组
  const res = [];

  const backTrack = (path, l, start) => {
    // 递归结束条件
    if (path.length === l) {
      res.push(path)
      return
    }

    // 遍历输入的数组长度 起始位置是start
    for (let i = start; i < nums.length; i++) {

      // 递归调用 需要保证子集的有序, start为 i+1
      backTrack(path.concat(nums[i]), l, i + 1)
    }
  };

  // 遍历输入数组长度
  for (let i = 0; i <= nums.length; i++) {

    // 传入长度 起始索引
    backTrack([], i, 0)
  }


  return res
};


subsets([1, 2, 3])