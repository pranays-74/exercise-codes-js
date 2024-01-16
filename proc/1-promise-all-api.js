function Promise1(bool){
  return new Promise((res, rej)=>{
    if(bool){
      res(true)
    }else{
      rej(false)
    }
  })
}

function Promise2(bool){
  return new Promise((res, rej)=>{
    if(bool){
      res(true)
    }else{
      rej(false)
    }
  })
}



const promise1 = Promise1(true)
.then((value) => ({ value, identifier: 'Promise1' }))
.catch((err)=>({err, identifier: "Prom1"}))


const promise2 = Promise2(false)
.then((value) => ({ value, identifier: 'Promise2' }))
.catch((err)=>({err, identifier: "Prom2"}))

// Using Promise.all to wait for both promises to resolve
Promise.all([promise1, promise2])
  .then((values) => {
  console.log(values)
  })
  .catch((error) => {
    console.error('At least one promise rejected:', error);
  });
