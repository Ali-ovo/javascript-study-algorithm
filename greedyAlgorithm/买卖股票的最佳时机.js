
// 时间复杂度 O(n) n为股票的数量
// 空间复杂度 O(1)
var maxProfit = function (prices) {
  // 存放利润
  const profit = 0;

  for (let i = 1; i < prices.length; i++) {

    // 不贪 如有更高的利润就直接卖出
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1]
    }
  }

  return profit
};