//https://www.geeksforgeeks.org/problems/check-if-two-arrays-are-equal-or-not3847/1?page=1&sprint=b0dd4e28d76e4981040b391cb4ad63b8&sortBy=submissions
//Platform - GeeksForGeeks
class Solution {
  /**
   * Function to check if two arrays are equal or not.
   * @param {number[]} arr1
   * @param {number[]} arr2
   * @returns {boolean}
   */
  check(arr1, arr2) {
    // If the arrays are of different lengths, they cannot be equal
    if (arr1.length !== arr2.length) {
      return false;
    }

    // Use a map to store counts of elements
    const countMap = new Map();

    // Increment count for each element in arr1
    for (const num of arr1) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    // Decrement count for each element in arr2
    for (const num of arr2) {
      if (!countMap.has(num)) {
        // If an element in arr2 doesn't exist in arr1
        return false;
      }
      countMap.set(num, countMap.get(num) - 1);
      if (countMap.get(num) === 0) {
        // Remove the entry from the map if the count becomes 0
        countMap.delete(num);
      }
    }

    // If the map is empty, all counts are zero, and arrays are equal
    return countMap.size === 0;
  }
}
