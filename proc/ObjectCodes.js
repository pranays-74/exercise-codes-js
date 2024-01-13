// //1 program to check if a key exists

// const person = {
//     id: 1,
//     name: 'John',
//     age: 23
// }

// // check if key exists
// const hasKey = 'name' in person;

// if(hasKey) {
//     console.log('The key exists.');
// }
// else {
//     console.log('The key does not exist.');
// }


// //2 program to loop through an object using for...in loop

// const student = {
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
// };

// // using for...in
// for (let key in student) {
//     let value;

//     // get the value
//     value = student[key];

//     console.log(key + " - " +  value);
// }

// //3 program to merge property of two objects

//object 1 cloning concept
const person = {
    name: 'Jack',
    age: 26
}

// // Shallow Cloning
// const originalShallow = { key1: 'value1', key2: { nestedKey: 'nestedValue' } };
// const clonedShallow = { ...originalShallow };
// clonedShallow.key2.nestedKey = 'modifiedValue';

// console.log(originalShallow.key2.nestedKey); // Output: 'modifiedValue'

// // Deep Cloning
// const originalDeep = { key1: 'value1', key2: { nestedKey: 'nestedValue' } };
// const clonedDeep = JSON.parse(JSON.stringify(originalDeep));
// clonedDeep.key2.nestedKey = 'modifiedValue';

// console.log(originalDeep.key2.nestedKey); // Output: 'nestedValue'




// //4 program to count the number of keys/properties in an object

// const student = {
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
// };

// let count = 0;

// // loop through each key/value
// for(let key in student) {

//     // increase the count
//     ++count;
// }

// console.log(count);

// //5 program to convert an object to a string

// const person = {
//     name: 'Jack',
//     age: 27
// }

// const result =  JSON.stringify(person);

// console.log(result);
// console.log(typeof result);


// //6 remove array element from array
// function r(ar, e){
// let na = [];
// for(let i=0; i<ar.length; i++){
// if(ar[i] !== e){
// na.push(ar[i]);
// }
// }
// return na;
// }

// console.log(r([1,2,4,5], 2))


// //7 check value present in array or not
// function r(ar, e){
// let na = [];
// let yes = ar.includes(e);
// if(yes){
// return true
// }
// return false
// }

// console.log(r([1,2,4,5], 2))


// //8 program to remove duplicate value from an array

// function getUnique(arr){

//     let uniqueArr = [];

//     // loop through array
//     for(let i of arr) {
//         if(uniqueArr.indexOf(i) === -1) {
//             uniqueArr.push(i);
//         }
//     }
//     console.log(uniqueArr);
// }
// ====================================================================================
// const array = [1, 2, 3, 2, 3];

// //alternate and easy below to get uniq values from array removes duplicates
// let arr = [1, 2, 4, 5, 3, 5]

// uniq = [...new Set(arr)];
// console.log(uniq)

let arr = "abababa"

let uniq = [...new Set(arr)];
console.log(uniq.join(' '))  // remove duplicate char from string
// -=================================================================================================
// // calling the function
// // passing array argument
// getUnique(array);


// function r(ar1, ar2){
// let ar = ar1.concat(ar2);
// let nua = [];
// for(let i of ar){
// if(nua.indexOf(i)=== -1){
// nua.push(i)
// }
// }
// console.log(nua);
// }

// r([1,2,3], [3,4,5])



// ////////object code practice

// // removing null values with key too
// var test = {
//   test1: null,
//   test2: 'somestring',
//   test3: 3,
// }

// function clean(obj) {
//   for (var propName in obj) {
//     if (obj[propName] === null || obj[propName] === undefined) {
//       delete obj[propName];
//     }
//   }
//   return obj
// }

// console.log(test);
// console.log(clean(test));


// // adding new object key values to existing object

// const NFTStore = {
//   artPieces: [
//     {
//       pieceName: "Emo Flamingos",
//       price: 30,
//       ownerList: [
//         {
//           name: "Fida Ernest",
//           userID: 23849,
//           purchaseDate: "09/13/2021",
//         },
//         {
//           name: "Eric Karger",
//           userID: 23510,
//           purchaseDate: "09/13/2021",
//         },
//       ],
//     },
//     {
//       pieceName: "Where is my bit wallet",
//       price: 100,
//       ownerList: [],
//     },
//   ],
//   storeCredits: 1000,
// };

// const buyer = {
//   name: "Rose Daniel",
//   userID: 23849,
//   purchaseDate: "11/29/2021",
// };

// let newlist = NFTStore.artPieces[0].ownerList.push(buyer);

// let emoPrice = NFTStore.artPieces[0].price;
// let ownerList = NFTStore.artPieces[0].ownerList;
// console.log(ownerList)
// console.log(emoPrice)

// ////////////////////////////////////////////
// var test = {
// 	p: "",
//   test1: "",
//   test2: 'somestring',
//   test3: 3,
// }

// /* function clean(obj) {
//   for (var propName in obj) {
//     if (obj[propName] === null || obj[propName] === undefined) {
//       delete obj[propName];
//     }
//   }
//   return obj
// } */

// function clean(obj){
// for(var key in obj){
// if(obj[key] === ""){
// delete obj[key]
// }
// }
// return obj
// }

// console.log(test);
// console.log(clean(test));

// //////////////////////////////////////
