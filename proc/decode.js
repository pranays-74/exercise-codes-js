const express = require('express');

const app = express();

// // /getRequestBody?name=John&age=25
// {
//     name: 'John',
//         age: 25,
// }

// app.get('/getRequestBody', (req, res) => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const param_x = urlParams.get('name');
//     console.log(param_x)
// })

// app.listen(3000)

// const obj = {
//     name: "p",
//     lname: "s"
// }

// function fName(greet, greet1) {
//     console.log(this.name + " " + this.lname + " " + greet + greet1)
// }
// const ob2 = {
//     name: "c",
//     lname: "c"
// }
// const bindName = fName().bind(ob2)
// // console.log(obj.fName())

// console.log(bindName)
// obj.fName.apply(ob2, ["hello", "Morning"])


var string = "Welcome to this Javascript Guide!";
//output: - 'emocleW ot siht tpircsavaJ !ediuG'

function revStr(s) {
    let spl = s.split(" ")
    let words = [];
    let wod = [];
    for (let index = 0; index < spl.length; index++) {
        words = spl[index].split("").reverse()
        wod.push(words.join(""))
    }
    console.log(wod.join(" "))

}

revStr(string)

