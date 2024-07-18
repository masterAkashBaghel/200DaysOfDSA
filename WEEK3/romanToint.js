//https://leetcode.com/problems/integer-to-roman/
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const romanNum = {
    V̆̈: 5000,
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  var str = "";
  for (var i of Object.keys(romanNum)) {
    var q = Math.floor(num / romanNum[i]);
    num -= q * romanNum[i];
    str += i.repeat(q);
  }
  return str;
};
