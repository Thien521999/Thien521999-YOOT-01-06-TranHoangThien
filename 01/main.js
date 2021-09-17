const checkSNT = (n) => {
  if (n < 0) return -1;

  let flash = true;

  if (n < 2) {
    flash = false;
  } else {
    for (let i = 2; i < n - 1; i++) {
      if (n % i === 0) {
        flash = false;
        break;
      }
    }
  }

  if (flash) return true;
  return false;
};

const arrNoSNT = (arr) => {
  if (arr.length <= 0) return -1;

  const arrNumber = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    if (checkSNT(arr[i]) === false) {
      arrNumber.push(arr[i]);
    }
  }
  return arrNumber;
};

const A = [1, 200, 423, 52, 6, 758, 15, 181, 199, 45, 997];

console.log(arrNoSNT(A));
