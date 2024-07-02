 
// unique no of occurences

//@note: Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.
class Solution {
    isFrequencyUnique(n, arr) {
        const mp = {};
        for (let i = 0; i < n; i++) {
            mp[arr[i]] = (mp[arr[i]] || 0) + 1;
        }
        const v = [];
        for (const key in mp) {
            v.push(mp[key]);
        }
        const mp2 = {};
        for (let i = 0; i < v.length; i++) {
            mp2[v[i]] = (mp2[v[i]] || 0) + 1;
            if (mp2[v[i]] > 1) {
                return false;
            }
        }
        return true;
    }

}