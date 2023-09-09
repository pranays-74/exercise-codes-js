// //1
// const awaitTimeout = delay =>
//     new Promise(resolve => setTimeout(resolve, delay));

// const f = async () => {
//     await awaitTimeout(3000);
//     console.log('Hi');  // Logs 'Hi' after 300ms
// };

// f()

// //2
// const sleep = (milliseconds) => {
//     return new Promise(resolve => setTimeout(resolve, milliseconds));
// }

// (async () => {
//     console.log(1)
//     await sleep(2000)
//     console.log(2)
//     await sleep(2000)
//     console.log(3)
// })()

// //3
// const client1 = new Promise((resolve, reject) => {
//     if (true) {
//         resolve("true")
//     }
//     reject("false")
// })
// const client2 = new Promise((resolve, reject) => {
//     if (true) {
//         resolve("true")
//     }
//     reject("fals")
// })

// Promise.all([client1, client2])
//     .then(returnedBooks => console.log(returnedBooks))
//     .catch(rejectionReason => console.log(rejectionReason))


// function doubleAfter2Seconds(x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(x * 2);
//         }, 2000);
//     });
// }

// async function addAsync(x) {
//     const a = await doubleAfter2Seconds(10);
//     const b = await doubleAfter2Seconds(20);
//     const c = await doubleAfter2Seconds(30);
//     return x + a + b + c;
// }


// addAsync(10).then((sum) => {
//     console.log(sum);
// });
// // console.log("first")

// // function doubleAfter2sec(a) {
// //     return new Promise(resolve => {
// //         setTimeout(() => {
// //             resolve(2 * a);
// //         }, 2000);
// //     })
// // }

// // async function addoAsync(x) {
// //     const a = await doubleAfter2sec(10);
// //     const b = await doubleAfter2sec('s');
// //     return x + a + b;
// // }

// // addoAsync(10).then(result => {
// //     console.log(result)
// // }) // calculation done in this way 10+ 2*10 2*5 res is 40

// const myPromise = new Promise((resolve, reject) => {
//     // condition
//     let condition = true;

//     if (condition) {
//         resolve('Promise is resolved successfully.');
//     } else {
//         reject('Promise is rejected');
//     }
// });

// myPromise.
//     then(res => console.log(res)).catch(err => console.log(err))



/////////////////////////CALLBACKS///////////////////////////////////////////////

// // callback functions//////////////////1111111111111111111111
const a = function () {
    var a = 2;
    var b = 4;
    const add = a + b
    console.log(add)
    console.log("This message is shown after 3 seconds");
}
setTimeout(a, 3000);


// /////////////////////222222222222222222222
// function cb(rt) {
//     setTimeout(() => console.log(rt), 2000)
// }

// function add(a, b, cb) {
//     const addResult = a + b;
//     cb(addResult);
// }

// add(1, 2, cb)
// console.log("first")

// /////////////////////////////3333333333333333333


// function cb(n) {
//     function name() {
//         console.log(`Welcome ${n}`)
//     }

//     setTimeout(name, 3000)
// }

// function printN(name, cb) {
//     const fullName = `${name}, Thanks`
//     cb(fullName);
// }

// printN("Pranay", cb)

// ///////////////////////////////////////////PROMISE//////////////////////////////////////////
// 1)
// function add() {
//     return new Promise(resolve => setTimeout(() => resolve(1 + 2), 1000));
// }
// add().then(res => console.log(res))


// 2)
// function add(a, b) {
//     return new Promise((res, rej) => {
//         if (true) {
//             setTimeout(() => res(a + b), 2000)
//         } else {
//             rej("Eror")
//         }
//     });
// }
// add(2, 1).then(res => console.log(res)).catch(er => console.log(er))

// 3)
// let promise = new Promise(function (resolve, reject) {
//     // Some imaginary 2000 ms timeout simulating a db call
//     setTimeout(() => {
//         if (true) {
//             console.log(2 + 2)
//             resolve({ msg: 'It works', data: 'some data' });
//         } else {
//             // If promise can not be fulfilled due to some errors like network failure
//             reject(new Error({ msg: 'It does not work' }));
//         }
//     }, 2000);
// });

// console.log(promise.then(re => console.log(re)))



// Move them to an array, sort that array, and then use that array for your purposes.Here's a solution:

// let maxSpeed = {
//         car: 300,
//         bike: 60,
//         motorbike: 200,
//         airplane: 1000,
//         helicopter: 400,
//         rocket: 8 * 60 * 60
//     };
// let sortable = [];
// for (var vehicle in maxSpeed) {
//     sortable.push([vehicle, maxSpeed[vehicle]]);
// }

// sortable.sort(function (a, b) {
//     return a[1] - b[1];
// });
