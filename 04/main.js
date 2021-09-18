const rotate90Clockwise = (arr) => {
  const n = arr.length;
  for (i = n - 1; i >= 0; i--) {
    for (j = 0; j < n; j++) document.write(arr[j][i] + " ");
    document.write("<br/>");
  }
};

var arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
rotate90Clockwise(arr);
