const promise1 = (bool)=>{
  return new Promise((res,rej)=>{
    if(bool){
      res("Resolve :", bool)
    }else{
      rej("Reject: ", bool)
    }
  })
}

const promise2 = (bool)=>{
  return new Promise((res,rej)=>{
    if(bool){
      res("Resolve :", bool)
    }else{
      rej("Reject: ", bool)
    }
  })
}


const Promise1 = promise1(true);

const Promise2 = promise2(false);

Promise.allSettled([Promise1, Promise2])
.then(values=>{
  console.log(values)
})
.catch(err=>console.log(err))
