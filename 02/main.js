const arrFibonacci = (fib) => {
  if (fib.length < 0) return -1;

  let arrFib = [];

  for (let i = 2; i <= 10; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    arrFib.push(fib[i]);
  }
  return arrFib;
};

const B = [4, 233, 12, 53, 55, 1, 32, 8, 245, 112];
console.log(arrFibonacci(B));
