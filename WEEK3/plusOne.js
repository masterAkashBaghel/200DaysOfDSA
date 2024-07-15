//https://leetcode.com/problems/plus-one/
var plusOne = function (digits) {
  const arr = [...(BigInt(digits.join("")) + BigInt(1)).toString()];
  return arr.map(Number);
};
