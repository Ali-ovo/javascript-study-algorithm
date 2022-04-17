const m = new Map();

// 增
m.set('a', 'aa');
m.set('b', 'bb');
m.set('c', 'cc');

// 删
m.delete("b"); 
m.clear(); // 清空

// 改
m.set('a', 'cc'); // 如果没有就添加，如果有就改

// 查
m.get('a'); // 'cc'

