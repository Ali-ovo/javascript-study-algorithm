
// 时间复杂度 O(n!) n! = 1 * 2 * 3 * ··· * (n-1) * n;
// 空间复杂度 O(n)
var permute = function (nums) {
  const res = [];
  const backTrack = (path) => {
    if (path.length === nums.length) {
      res.push(path)
      return
    }

    nums.forEach(n => {
      if (path.includes(n)) return;

      backTrack(path.concat(n))
    })
  }

  backTrack([])

  return res;
};

permute([1, 2, 3])