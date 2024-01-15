// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const validParenthesis = (str) => {
    // here for this problem we will use stack LIFO (last in first out)
    //  initialize new stack push open brackets if found in string
    let stack = [];
    for (const char of str) {
        if (char === "[" || char === "{" || char === "(") {
            stack.push(char); // here we checking for open brackets in string and pushing
            //to stack if found
        } else {
            // now 2 condition
            // else part 1st condition if no open bracket then return false
            if (stack.length === 0) {
                return false;
            }

            // here 2nd condition checking for top of stack with closing brackets
            // if found pop it out from stack check with if 3 condition
            let top = stack.pop();
            if (
                (char === "]" && top !== "[") ||
                (char === "}" && top !== "{") ||
                (char === ")" && top !== "(")
            ) {
                return false;
            }
        }
    }
    return stack.length === 0; // here return true if balance brackets
};
console.log(validParenthesis("(){}"));  // true
console.log(validParenthesis("(){"));  // false
// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
