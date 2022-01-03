//1. twoSums

// var twoSum = function (nums, target) {
//   const arrSum = [];

//   nums.forEach((n, i, a) => {
//     let buffer = target - n;

//     a.forEach((n2, i2, a2) => {
//       if (i !== i2 && buffer - n2 === 0 && arrSum.length < 2) {
//         arrSum.push(i, i2);
//       }
//     });
//   });

//   return arrSum;
// };

//2. Reverse Integer

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Constraints:
// -231 <= x <= 231 - 1

// var reverse = function (x) {
//   const xt = x > 0 ? String("+" + x).split("") : String(x).split("");

//   if (xt[xt.length - 1] == 0) {
//     xt.pop();
//   }

//   const newArray = [];
//   newArray.push(xt[0]);
//   for (let i = xt.length - 1; i > 0; i--) {
//     newArray.push(xt[i]);
//   }

//   return Math.pow(-2, 31) <= Number(newArray.join("")) &&
//     Number(newArray.join("")) <= Math.pow(2, 31) - 1
//     ? Number(newArray.join(""))
//     : 0;
// };

//3. isPalindrome?

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// var isPalindrome = function (x) {
//   const reversed = x.toString().split("").reverse().join("");

//   return reversed === x.toString();
// };

//4. Roman to Integer

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// var romanToInt = function (s) {
//   let res = 0;
//   let dict = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   };
//   for (let i = 0; i < s.length; i++) {
//     if (dict[s[i] + s[i + 1]]) {
//       res += dict[s[i] + s[i + 1]];
//       i++;
//     } else {
//       res += dict[s[i]];
//     }
//   }
//   return res;
// };

//5. Longest common prefix

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// var longestCommonPrefix = function (strs) {
//   if (strs.length == 1) return strs[0];
//   else if (strs.includes("")) return "";

//   const allEquals = strs.every((el, i, arr) => el == arr[0]);

//   if (allEquals) return strs[0];

//   let longestWord = strs
//     .reduce((a, b) => {
//       return a.length < b.length ? b : a;
//     }, "")
//     .split("");

//   let prefixArray = [];
//   strs.forEach((el) => {
//     let prefix = "";
//     for (let i = 0; i < longestWord.length; i++) {
//       if (longestWord[0] !== el?.[0]) {
//         prefixArray.push(prefix);
//         break;
//       } else if (longestWord[i] == el?.[i]) {
//         prefix += longestWord[i];
//       } else {
//         prefixArray.push(prefix);
//         break;
//       }
//     }
//   });

//   let smallestPrefix = prefixArray.sort((a, b) => {
//     return a.length - b.length;
//   });

//   return prefixArray.includes("") ? "" : smallestPrefix[0];
// };

//7. Range Sum of BST

// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let counter = 0;

  function dfs(node) {
    if (!node) return null;

    if (node.val >= low && node.val <= high) counter += node.val;

    if (low < node.val) dfs(node.left);

    if (high > node.val) dfs(node.right);
  }

  dfs(root);

  return counter;
};
