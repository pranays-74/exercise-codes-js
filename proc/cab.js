// Common object 
const personObj = {
  fname: "Sam",
  lname: "dsuza"
}

const mainObj = {
  fullName: function(){
    return this.fname +" " + this.lname;
  }
}



const personCall = mainObj.fullName.call(personObj);
console.log("====================Call Method==============");
console.log(personCall)

// By using call we can user other object method 
// in above case personObj is using method of main object


const mainObjApply = {
  fullName: function(greet1, greet2){
    return greet1 +" "+ this.fname +" " + this.lname +" "+ greet2;
  }
}

const personApply = mainObjApply.fullName.apply(personObj, ["hello", "good morning"]);
console.log("====================Apply Method==============");
console.log(personApply)

// By using apply method we can user other object method 
// in above case personObj is using method of mainObjApply object
// in apply we can send arguments in array format this is only the differenc
// betw call and apply 

const mainObjBind = {
  fullName: function(greet1, greet2){
    return greet1 +" "+ this.fname +" " + this.lname +" "+ greet2;
  }
}


const personBind = mainObjBind.fullName.bind(personObj,"hello", "good morning");
console.log("====================Bind Method==============");
// console.log(personBind())

setTimeout(()=>{
  console.log(personBind())
}, 2000);
// we can use bind in case binded method is using as callback then this loose the value 
// then in this case we can use bind method

