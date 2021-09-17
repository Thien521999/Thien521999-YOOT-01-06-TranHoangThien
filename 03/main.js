const insertNumberInArr = (arr, idx, x) => {
  let n = arr.length;

  if (idx >= 0 && idx <= n) {
    for (let i = n; i > idx; i--) {
      arr[i] = arr[i - 1];
    }
    arr[idx] = x;
    n++;
  }

  return arr;
};

let C = [5, 44, 55, 2, 4, 9, 50, 9];

console.log(insertNumberInArr(C, 3, 77));
