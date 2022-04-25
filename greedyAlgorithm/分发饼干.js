


var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)

    let i = 0
    s.forEach((n) => {
        console.log(n);
        if (n >= g[i]) { 
            i += 1
        }
    })

    return i
}

findContentChildren([1, 2, 3], [1, 1])
