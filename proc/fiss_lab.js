const students = [{
    name: 'a',
    marks: 80
}, {
    name: 'b',
    marks: 40
}, {
    name: 'c',
    marks: 70
}, {
    name: 'd',
    marks: 90
}, {
    name: 'e',
    marks: 30
}, {
    name: 'f',
    marks: 76
}, {
    name: 'g',
    marks: 20
}, {
    name: 'h',
    marks: 90
}]

function getNames(obj) {

    // let arrName = obj.filter(el => {
    //     return el.marks > 50
    // })
    // let names = arrName.map(e => {
    //     return e.name
    // })
    // return names

    let n = obj.sort(function (a, b) {
        return a.marks - b.marks
    });
    let last = n.slice(-1)
    return last
}

console.log(getNames(students))

  // for (const key in obj) {
    //     if (obj[key].marks > 50) {
    //         return obj[key].name
    //     }
    // }