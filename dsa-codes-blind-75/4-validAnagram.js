// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging
// the letters of a different word or phrase, typically using all the original letters exactly once.

//     Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
}
let s = "anagram", t = "nagaram";
console.log(validAnagram(s, t))