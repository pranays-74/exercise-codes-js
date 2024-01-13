
let result = 0;
const people = [
    {
        "id": 1,
        "firstName": "John",
        "lastName": "Doe",
        "age": 30,
        "city": "New York"
    },
    {
        "id": 2,
        "firstName": "Alice",
        "lastName": "Smith",
        "age": 25,
        "city": "Los Angeles"
    },
    {
        "id": 3,
        "firstName": "Bob",
        "lastName": "Johnson",
        "age": 35,
        "city": "Chicago"
    },
    {
        "id": 4,
        "firstName": "Emily",
        "lastName": "Davis",
        "age": 28,
        "city": "San Francisco"
    }
]

// max age
aresult = people.reduce((maxP, cP) => {
    return cP.age > maxP.age ? cP : maxP
}, people[0])

let maxAge = people.reduce((max, person) => {
    return person.age > max ? person.age : max
}, 0)
console.log("...", maxAge)

result = people.reduce((p, c) => {
    return c.age + p
}, 0)

result = people.sort((a, b) => b.age - a.age);

result = people.map((person) => {
    let fullName = `${person.firstName} ${person.lastName}`;
    return { ...person, fullName }
})


result = people.find((person) => {
    return person.city == 'Chicago'
})

result = people.filter((person) => {
    return person.age > 30
})

result = people.every((person) => {
    return person.age > 26
})
console.log(result)