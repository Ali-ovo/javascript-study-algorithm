// 每个孩子都有一个胃口g. 每个孩子只能拥有一个饼干
// 输入: g = [1,2,3], s = [1,1]
// 输出: 1
// 三个孩子胃口值分别是1,2,3  但是只有两个饼干,所以只能让胃口1的孩子满足


// 时间复杂度 O(nlogn) 
// 空间复杂度 O(1)
var findContentChildren = function (g, s) {
    // 对饼干和孩子胃口进行排序
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)


    // 是第几个孩子
    let i = 0

    s.forEach((n) => {
        // 如果饼干能满足第一个孩子
        if (n >= g[i]) { 
            // 就开始满足第二个孩子
            i += 1
        }
    })

    return i
}

findContentChildren([1, 2, 3], [1, 1])
