const rotate90Clockwise = (arr) => {
  const n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < n; j++) document.write(arr[j][i] + " ");
    document.write("<br/>");
  }
};

var arr = [
  [1, 825, 9, 6],
  [85, 96, 1, 0],
  [9, 125, 987, 5],
  [8, 56, 32, 0],
];

rotate90Clockwise(arr);
