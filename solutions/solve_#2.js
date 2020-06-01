/**
 * Problem #2: https://leetcode-cn.com/problems/add-two-numbers/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (l1.val === 0 && l1.next === null) {
    return l2;
  }
  if (l2.val === 0 && l2.next === null) {
    return l1;
  }
  const arr1 = link2Num(l1), arr2 = link2Num(l2);
  console.log('arr1', arr1.reverse());
  console.log('arr2', arr2.reverse());
  const sumArr = bigSum(arr1.reverse(), arr2.reverse());
  console.log('sum array of num is:', sumArr)
  return num2Link(sumArr);
};

function link2Num(link, arr = []) {
  if (link.next !== null) {
    arr.push(link.val);
    link2Num(link.next, arr);
  } else {
    arr.push(link.val);
  }
  console.log('arr:', arr.join(','));
  return arr;
}

function num2Link(arr = []) {
  let link = null;
  arr = arr.reverse();
  for (let value of arr) {
    const node = new ListNode(value);
    node.next = link;
    link = node;
  }
  return link;
}

// 处理大数字相加
function bigSum(numArr1, numArr2) {
  let temp = false;
  let sum = [];
  while (numArr1.length || numArr2.length || temp) {
    /* 这里好像leeCode的 pop方法有问题，必须写成shift才是从数组尾部弹出元素 */
    temp += ~~(numArr1.shift() || 0) + ~~(numArr2.shift() || 0);
    sum.push(temp % 10);
    temp = temp > 9;
  }
  return sum;
}