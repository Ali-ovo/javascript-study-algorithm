let mySet = new Set();

// 添加
mySet.add(1);
mySet.add(2);
mySet.add(3);

// 判断是否在集合中
const has = mySet.has(5);


// 删除元素
mySet.delete(1);


// 遍历
for (let item of mySet.values()) {
  console.log(item);
};

// 传换数组
const arr = [...mySet];

// 数组转换为集合
const set = new Set(arr);