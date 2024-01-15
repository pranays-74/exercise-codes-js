// To determine if an array contains any duplicates, you can use various approaches in
//     JavaScript.Here's a simple example using a hash set:

const containsDuplicate = (ar) => {
    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j < ar.length; j++) {
            // return true if i==j
            if (ar[j] === ar[i]) {
                return true
            }
        }
    }
    return false
}

const optiContainsDuplicate = (ar) => {
    // using set we can implement 
    let seen = new Set();
    for (let num of ar) {
        if (seen.has(num)) {
            return true
        }
    }
    return false;
}

// Example usage:
const array1 = [1, 5];
const array2 = [1, 1, 2, 3, 4, 1];

console.log(containsDuplicate(array1)); // Output: false
console.log(containsDuplicate(array2)); // Output: true

console.log(optiContainsDuplicate(array1)); //false