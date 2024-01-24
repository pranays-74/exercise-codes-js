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
