const fn1 = () => {
  fn2();
};

const fn2 = () => {
  fn3();
};


const fn3 = () => { };

fn1();


// 断点调试 查看调用堆栈