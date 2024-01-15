//two sum = target give index of which are = target

//brute force solution o(n^2) tc
const twoSum = (ar, target) => {
    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j < ar.length; j++) {
            if (ar[i] + ar[j] === target) {
                console.log(i, j)
            }
        }
    }
}

//optimum solution
// THIS IS USING Object TC o(n)
const opt2Sum = (ar, target) => {

    let object = {};
    let diff = 0;
    for (let i = 0; i < ar.length; i++) {
        diff = target - ar[i];
        if (object.hasOwnProperty(diff)) {
            return [object[diff], i]
        }
        object[ar[i]] = i;
    }
    return null
}

twoSum([1, 3, 5, 6], 7)
console.log(opt2Sum([1, 3, 5, 6], 7))
