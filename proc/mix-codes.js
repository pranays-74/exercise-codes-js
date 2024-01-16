// write a function to multiply function mul(2)(3) = 6
const multiply = (num1) => {
    return (num2) => {
        return (num3) => {
            console.log(num1 * num2 * num3)
        }
    }
}

const multiplyByTwo = multiply(2)(3);
multiplyByTwo(3); // Outputs: 18
// Partial Application:
// Currying allows you to partially apply a function,
// fixing one or more arguments while leaving others to be supplied later.
// This is useful in scenarios where you want to reuse a function with common
// parameters but provide specific values dynamically.


//IIFE
(function () {
    console.log("first")
})()

//Remove duplicates from array
let ar = [1, 2, 3, 4, 4, 4, 4, 3, 3, 2, 1, 3, 4, 4];
let unikArray = [...new Set(ar)];
console.log(unikArray)