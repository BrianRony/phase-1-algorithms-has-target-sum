function hasTargetSum(array,target){
  const seenNum= {}

  for(let num of array){
    const complement = target - num;
    if(complement in seenNum) return true
    seenNum[num] = true;
    }
return false
}
// function hasTargetSum(array, target) {
//  for(let i = 0;i<array.length; i++){
//   const num = target - array[i]
//     for(let j=i+1;j<array.length;j++){
//       if((array[j] === num)){
//           return true
//       }
//     }
//  }
//  return false
// }

/* 
  Write the Big O time complexity of your function here
  O(n)
  O(n^2)
*/

/* 
  Add your pseudocode here
  Iterate through our array
  for each number get a comlimentary number but subtracting it from the target
  look is there is a number equal to the compliment 
  if present return

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
