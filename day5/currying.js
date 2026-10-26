function curryExample(a) {
  return function h(b) {
    return a * b; 
  };
}
console.log(curryExample(2)(5)); 

const add = a => b => c => a + b + c;
console.log(add(5)(7)(3)); // 6
