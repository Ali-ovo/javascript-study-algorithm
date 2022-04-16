const obj = {};
const func = function () { };
const arr = [];



// 手写instanceOf
const myInstanceOf = (A, B) => {
  let p = A;
  while (p) {
    if (p === B.prototype) return true;
    p = p.__proto__;
  }

  return false
}


console.log(myInstanceOf([], Object));