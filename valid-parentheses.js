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
    
    if (!s) {
        return true;
    }
  
    const stack = [];
    const map = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    for (let i=0 ; i<s.length ; i++) {
        const ch = s.charAt(i);
        if (ch === '}' || ch === ']' || ch === ')') {
            const poppedCh = stack.pop();
            if ( ch !== map[poppedCh])  {
                return false;
            }
        } else {
            stack.push(ch);
        }
        
    }
    
    return stack.length === 0;
};

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