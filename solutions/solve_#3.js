/**
 * Problem #3: https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) {
    return 0;
  }
  let i;
  // 128是ascii码可以表示的字符数的上限，最后结果不可能超出这个值
  let len = s.length < 128 ? s.length : 128;
  let fullLength = s.length;
  for (len; len > 0; len -= 1) {
    for (i = 0; i < fullLength - len + 1; i += 1) {
      if (!hasDuplicateChar(s.substring(i, i + len))) {
        return len;
      }
    }
  }
};

function hasDuplicateChar(str) {
  if (typeof str !== 'string') {
    return false;
  }
  const strlen = str.length;
  const processedStrlen = Array.from(new Set(str.split(''))).length;
  return strlen > processedStrlen;
}