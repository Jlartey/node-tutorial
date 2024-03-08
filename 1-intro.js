// console.log(__dirname);
// console.log(__filename);
// console.log(process);

// setInterval(() => {
//   console.log("hello world!");
// }, 1000);

var merge = function (nums1, m, nums2, n) {
  let index = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] === 0) {
      nums1[i] = nums2[index];
      index++;
    }
  }
  return nums1.sort((a, b) => a - b);
};

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
const result = merge();
