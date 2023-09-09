// // Reverse string 
// function s(str){
// return str.split('').reverse().join('');
// }

// console.log(s("abc"))`



// /////////2

// function duplicateCharCount(str) {

// 	if(str) {
// 		var obj = {};
// 		for(let i = 0; i < str.length; i++) {
// 			if(obj[str[i]]){
// 				obj[str[i]] += obj[str[i]];
// 			}else {
// 				obj[str[i]] = 1;
// 			}
// 		}
// 		console.log(obj);
// 	}

// }

// duplicateCharCount("aaaabcdd");

// outPut: {
//   a: 2,
//   b: 1,
//   c: 1,
//   d: 2
// }

// ////////3
// function anagramCheck(str1, str2){
//      if (str1.length !== str2.length) {
//         return false
//      }

//     return str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("")
// }

// console.log(anagramCheck("Listen", "Silent")) //true
// console.log(anagramCheck("Mary", "arms")) //false


// //////////4
// check number only true for number and false for string
// let isnum = /^\d+$/.test("klklk122121221212");

// console.log(isnum)


// ////5 
// findRepeat char in string
// function findRepeat(str) {
//     for(var i = 0; i <= str.length; i++) {
//         for(var j = i+1; j <= str.length; j++) {
//             if(str[j] == str[i]) {
//                 return false; // repeat char
//             }
//         }
//     }
//     return true; // no repeat char
// }

// console.log(findRepeat("abc"))

// ////////////6
// // program to check the number of occurrence of a character

// function countString(str, letter) {
//     let count = 0;

//     // looping through the items
//     for (let i = 0; i < str.length; i++) {

//         // check if the character is at that position
//         if (str.charAt(i) == letter) {
//             count += 1;
//         }
//     }
//     return count;
// }
// console.log(countString("scholl", "l") )

// //////7

// // palindrome check 
// function p(str){
// let revStr = str.split('').reverse().join('');
// if(str === revStr){
// return true;
// }
// return false;
// }

// console.log(p("man")) // false

// //////8

// function firstNotRepeatingCharacter(s) {
//     for (let i = 0; i < s.length; i++) {
//         if(s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))) {
//             return s.charAt(i)
//         }
//     }
//     return '_'    
// }

// console.log(firstNotRepeatingCharacter("ab"))\
// ;kl\
// }
// =[=-06 c6p;olik['\
// '\


// ///////9
// function removeDuplicate(str, n)
//     {
//         // Used as index in the modified string
//         var index = 0;

//         // Traverse through all characters
//         for (var i = 0; i < n; i++)
//         {
//             // Check if str[i] is present before it
//             var j;
//             for (j = 0; j < i; j++)
//             {
//                 if (str[i] == str[j])
//                 {
//                     break;
//                 }
//             }

//             // If not present, then add it to
//             // result.
//             if (j == i)
//             {
//                 str[index++] = str[i];
//             }
//         }

//         return str.join("").slice(str, index);
//     }

//     // Driver code
//         var str = "geeksforgeeks".split("");
//         var n = str.length;
//        console.log(removeDuplicate(str, n));

// ////////////////10

// // program to sort words in alphabetical order

// // take input
// const string = prompt('Enter a sentence: ');

// // converting to an array
// const words = string.split(' ');

// // sort the array elements
// words.sort();

// // display the sorted words
// console.log('The sorted words are:');

// for (const element of words) {
//   console.log(element);
// }

// /////////11
// // program to replace a character of a string

// const string = 'Mr Red has a red house and a red car';

// // replace the characters
// const newText = string.replace('red', 'blue');

// // display the result
// console.log(newText);

// /////////////12
// // program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

// take input
const string = prompt('Enter a string: ');

const result = capitalizeFirstLetter(string);

// console.log(result);

// //////13
// // program to replace all occurrence of a string

// const string = 'Mr Red has a red house and a red car';

// // regex expression
// const regex = /red/gi;

// // replace the characters
// const newText = string.replace(regex, 'blue');

// // display the result
// console.log(newText);


// /////////14

// // program to trim a string

// const string = '      Hello World       ';

// const result = string.trim();

// console.log(result);

// /////////////15

// // program to get the file extension

// function getFileExtension(filename){

//     // get file extension
//     const extension = filename.split('.').pop();
//     return extension;
// }

// // passing the filename
// const result1 = getFileExtension('module.js');
// console.log(result1);

// const result2 = getFileExtension('module.txt');
// console.log(result2);


// ////////16 JavaScript Program to Remove All Whitespaces From a Text
// // program to trim a string

// const string = '      Hello World       ';

// const result = string.split('  ').join('');

// console.log(result);

// ////////NeoSoft Code
// function stringRev(str) {
//     let ar = str.split('') // convert in array
//     let newArray = [];
//     for (let index = ar.length - 1; index >= 0; index--) {
//         newArray.push(ar[index]);
//     }
//     let revStr = newArray.join("")
//     return revStr;
// }
// console.log(stringRev("abc"))



// /////////axiom test
// // const express = require("express")
// // const bodyParser = require('body-parser')
// // const app = express();

// // // parse application/json
// // app.use(bodyParser.json())

// // app.use('/', (req, res) => {
// //     res.send('Home Page')
// // });

// // app.post('/create', (req, res) => {
// //     try {
// //         const id = 1;
// //         const { email, password, fullName } = req.body;

// // const hashPassword =

// //         res.status(201).json({
// //             email: email,
// //             fullName: fullName,
// //             message: "User created successfully"
// //         })

// //     } catch (error) {

// //     }
// // })

// // app.listen(3000, () => {
// //     console.log("Server created at 3000")
// // })

// function checkPalindrome(str) {
//     const revStr = str.split('').reverse().join('');
//     return str === revStr;
// }

// console.log(checkPalindrome('malayalam'));
