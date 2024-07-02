
// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //sort the strings
    s = s.split("").sort()
   t = t.split("").sort()
   // compare the length of the strings
   if(s.length !== t.length){
       return false;
   }
   // compare the strings
   for(var i =0;i<s.length;i++){
       if(s[i]!=t[i]){
           return false;
       }
   }
   return true;
};
// anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.