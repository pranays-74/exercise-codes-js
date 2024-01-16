const maxSubArray = (nums)=>{
  let sum = nums[0];
  let max = nums[0];
  
  //here we are going from 1 to last index of array with loop 
  for (let i = 1; i < nums.length; i++) {
    
    sum = Math.max(sum+ nums[i], nums[i]);
    max = Math.max(max, sum);
  }
  return max;
}

console.log(maxSubArray([-4,1,2,3]))

//Logic
// nums[i]       1    2     3
// sum      -4   1    3     6
// max      -4   1    3     6 -- here array ends and return max 6 


//space O(1) => constant space
//time O(n) => proportional to length of input array 
