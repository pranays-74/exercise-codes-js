//Product of Array Except Self 

// input array = [2,1,3]
// output array = [3, 6, 2]

const productExceptSelf = (ar)=>{
  let left = [];
  let right = [];
  
  left[0] = 1
  for (let i = 1; i < ar.length; i++) {
    left[i] = left[i-1] * ar[i-1]
  }
  
  right[ar.length-1] = 1
  for (let i = ar.length-2; i > -1; i--) {
    right[i] = right[i+1] * ar[i+1]
  }
  
  console.log("left array product= ", left)
  console.log("right array product= ", right)
  
  let anws = [];
  for (let i = 0; i < ar.length; i++) {
    anws[i] = left[i]*right[i]
  }
  console.log("Product of array except: ", anws)
}

productExceptSelf([2,1,3])
