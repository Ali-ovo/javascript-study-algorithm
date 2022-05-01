// 全排列 
// 输入 [1, 2, 3]
// 输出 [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]


// 时间复杂度 O(n!) n! = 1 * 2 * 3 * ··· * (n-1) * n;
// 空间复杂度 O(n)
var permute = function (nums) {
  // 存放结果
  const res = [];

  const backTrack = (path) => {
    // 递归结束条件 
    if (path.length === nums.length) {
      res.push(path)
      return
    }

    // 遍历传入数组
    nums.forEach(n => {
      // 如果子数组中有这个元素就是死路， 需要回溯回去走其他路
      if (path.includes(n)) return;

      // 加入到子数组里
      backTrack(path.concat(n))
    })
  }

  backTrack([])

  return res;
};

permute([1, 2, 3])