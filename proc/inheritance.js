//prototype chaining 

var parentObj = {
    greet: function () {
        console.log("Hello")
    }
}

var childObj = Object.create(parentObj);
childObj.greet();

//class inheritance 

// class Animal{
//   constructor(name){
//     this.name= name;
//   }
//   makeSound(){
//     console.log("ALL Sound")
//   }
// }


// class Dog extends Animal{
//   dogSound(){
//     console.log("Bark")
//   }
// }
// const objDog =new Animal("Labra");

// objDog.dogSound


// Class inheritance

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   makeSound() {
//     console.log("From animal Sound");
//   }
// }

// class Dog extends Animal {
//   dogSound() {
//     console.log("Bark");
//   }
// }

// // Creating an instance of the Dog class
// const myDog = new Dog("Buddy");

// // Calling methods on the Dog instance
// myDog.makeSound(); // Inherits from Animal class
// myDog.dogSound();


class Animal {
    constructor(name) {
        this.name = name;
    }

    commonSound() {
        console.log("From animal sound")
    }

}

class Dog extends Animal {
    dogSound() {
        console.log("Bark")
    }
}

class Cat extends Animal {
    catSound() {
        console.log("mew")
    }
}


const myDog = new Dog("Buddy");
const myCat = new Cat("Kitty");
myDog.commonSound();
myDog.dogSound();

myCat.commonSound();
myCat.catSound()