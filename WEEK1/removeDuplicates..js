//https://leetcode.com/problems/remove-duplicates-from-sorted-array/
var removeDuplicates = function (ar) {
  let n = ar.length;
  let i = 0,
    k = 0;

  for (let i = 0; i < n; i++) if (ar[i] > ar[k]) ar[++k] = ar[i];

  return k + 1;
};
