const users = [
    {
        "id": 1,
        "name": "John Doe",
        "age": 25,
        "email": "john@example.com",
        "active": true
    },
    {
        "id": 2,
        "name": "Jane Bmith",
        "age": 30,
        "email": "jane@example.com",
        "active": false
    },
    {
        "id": 3,
        "name": "Bob Aohnson",
        "age": 22,
        "email": "bob@example.com",
        "active": true
    }
]


// only names 
let names = users.map((user) => user.name);
console.log(names)

// only acitve 
let activeUsers = users.filter((user) => user.active).map((user) => user.name);
console.log(activeUsers)

// sort by age descending 
let sortByAge = users
    .sort((a, b) => b.age - a.age) // only in case of number sorting we can user minus
    .filter((user) => user.active)
    .map((user) => ({ name: user.name, age: user.age }));
console.log(sortByAge)


//find particular name user exist or not in array of object

let userFind = (name, arr) => arr.some((ele) => {
    return ele.name === name;
})

let userFinds = (name, arr) => arr.find((ele) => {
    return Boolean(ele.name === name);
})
console.log(userFind("John Doe", users))
console.log(userFind("John Do", users))


//sort by users last name
// string or char sorting works differently 
const sortByLastName = users.sort((user1, user2) => {
    let lastName1 = user1.name.split(" ")[1];
    let lastName2 = user2.name.split(" ")[1];
    return lastName1 < lastName2 ? -1 : 1;
})

console.log(sortByLastName);