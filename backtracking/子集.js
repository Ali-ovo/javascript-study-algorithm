
// 时间复杂度 O(2 ^ N) 每个元素都有两种可能
// 空间复杂度 O(N)
var subsets = function (nums) {
  const res = [];

  const backTrack = (path, l, start) => {
    if (path.length === l) {
      res.push(path)
      retu
      rn
    }
    for (let i = start; i < nums.length; i++) {
      backTrack(path.concat(nums[i]), l, i + 1)
    }
  };

  for (let i = 0; i <= nums.length; i++) {
    backTrack([], i, 0)
  }


  return res
};


subsets([1, 2, 3])