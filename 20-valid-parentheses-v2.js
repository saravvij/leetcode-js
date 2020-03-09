/* 
20. Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid. 

Link: https://leetcode.com/problems/valid-parentheses/
*/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {

  // Empty string
  if (!s) {
    return true;
  }

  // Declare a empty stack
  const stack = []; 

  // Iterate symbols / string
  for (let i = 0; i < s.length; i++) {
    const ch = s.charAt(i); // Take each character from the string

    if( ch === '{' || ch ==='(' || ch === '[') {
      stack.push(ch);
      continue;
    }

    if (ch === "}" && stack.pop() !== "{") {
     return false;
    }

    if (ch === "]" && stack.pop() !== "[") {
      return false;
    }

    if (ch === ")" && stack.pop() !== "(") {
      return false;
    }

  }

  // Stack should be empty for valid string
  return stack.length === 0;    
};

// Tests
function test() {
  const test1 = "{}"; // true
  const test2 = "{([])}"; // true
  const test3 = "{[}"; // false
  const test4 = ""; // true
  const test5 = "(((((((()"; // false
  const test6 = "((()(())))"; // true

  console.log(test1, isValid(test1)); // true
  console.log(test2, isValid(test2)); // true
  console.log(test3, isValid(test3)); // false
  console.log(test4, isValid(test4)); // true
  console.log(test5, isValid(test5)); // false
  console.log(test6, isValid(test6)); // true
}
test();
