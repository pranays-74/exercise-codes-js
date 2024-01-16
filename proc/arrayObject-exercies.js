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
        "name": "Jane Smith",
        "age": 30,
        "email": "jane@example.com",
        "active": false
    },
    {
        "id": 3,
        "name": "Bob Johnson",
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
    .sort((a, b) => b.age - a.age)
    .filter((user) => user.active)
    .map((user) => ({ name: user.name, age: user.age }));
console.log(sortByAge)