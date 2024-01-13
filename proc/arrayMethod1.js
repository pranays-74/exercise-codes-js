
// Array: People Data
const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    // ... (rest of the data)
];

// Exercises:

// Exercise 1: Average Income of All People
const totalIncome = people.reduce((sum, person) => sum + parseInt(person.salary), 0);
console.log(`Average income is ${totalIncome / people.length}`);

// Exercise 2: People Older Than 30
const today = new Date();
const oldThanThirty = people.filter((person) => {
    const birthDate = new Date(person.DOB);
    const age = today.getFullYear() - birthDate.getFullYear();
    return age > 30;
});
console.log(oldThanThirty);

// Exercise 3: Get a list of the people's full name (firstName and lastName).
const getFullName = people.map((person) =>
    person.firstName + " " + person.lastName
);
console.log(getFullName);

// Exercise 4: Get a list of people in the array ordered from youngest to oldest.
const youngToOld = people.sort((a, b) =>
    new Date(b.DOB) - new Date(a.DOB)
);
console.log(youngToOld);

// Exercise 5: How many people are there in each department?
const departmentCount = people.reduce((count, person) => {
    const department = person.department;
    count[department] = (count[department] || 0) + 1;
    return count;
}, {});

console.log('Number of people in each department:', departmentCount);

const deptCount = people.reduce((c, p) => {
    const d = p.department;
    c[d] = (c[d] || 0) + 1;
    return c
}, [])

console.log("count", deptCount)