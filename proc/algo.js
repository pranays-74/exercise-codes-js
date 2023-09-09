
// for (let index = 1; index <= 100; index += 2) {
//     console.log(index)

// }
// for (let index = 1; index <= 10; index++) {
//     tabl(index)

// }

// function tabl(n) {
//     for (let index = 1; index <= 10; index++) {
//         let tab = n * index
//         console.log(tab)
//     }
// }

// tabl()
let sum = 0
for (let index = 1; index <= 3; index++) {
    sum += index
}
console.log(sum)


// let sum = 0;
// for (let index = 10; index <= 30; index += 2) {
//     sum += index
// }
// console.log(sum)

// let ar = [1, 3, 9, 15, 90]
// let s = 0;
// for (let index = 0; index < ar.length; index++) {
//     s += ar[index] / ar.length;

// }
// console.log(s)

// function findMaxFromAr(array) {
//     var max = array[0];
//     for (let index = 0; index < array.length; index++) {
//         if (array[index] > max) {
//             max = array[index]
//         }

//     }
//     console.log(max)
// }

// findMaxFromAr([10, 2, 9, -3, -3])

// function fibo(n) {
//     let n0 = 0;
//     let n1 = 1;
//     let nextNum = 0;
//     for (let index = 1; index < n; index++) {
//         nextNum = n0 + n1;
//         n0 = n1;
//         n1 = nextNum
//         console.log(nextNum)
//     }
// }

// fibo(10)


// prime means 19 which is only divisible by 2 values ex 1 is divisible by 19 or 19 at the same time
// function isNumPrime(n) {
//     if (n < 2) {
//         return false;
//     }
//     if (n == 2) {
//         return true;
//     }

//     let maxDiv = Math.sqrt(n);
//     console.log(maxDiv)
//     for (let i = 2; i <= maxDiv; i++) {
//         if (n % i == 0) {
//             return false;
//         }
//     }
//     return true
// }

// console.log(isNumPrime(19))

function calSum(n) {
    let s = n.toString();

    let sum = 0;
    for (const char of s) {
        let i = parseInt(char);
        sum += i
    }
    console.log(sum)
}

// function calsum(n) {
//     let s = n.toString();
//     const a = s.split("");
//     let sum = 0;
//     for (let i = 0; i < a.length; i++) {
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   sum += parseInt(a[i])
//     }
//     console.log(sum)
// }
calSum(1111) //4 output

// console.log("first".split('').reverse().join(''))

// let f = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let g = [1, 2, 3, 4, 4, 11, 12];
// let c = [];

// function findUniqfrom2array(a, b) {
//     c = [...a, ...b].sort();
//     let uniq = [...new Set(c)]
//     console.log(uniq.sort());
// }

// findUniqfrom2array(f, g)

// function bb(a, b) {
//     let na = []
//     for (let i of a) {
//         if (!(b.includes(i))) {
//             na.push(i);
//         }
//     }
//     console.log(na)
// }

// bb(f, g)