// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// // a) Create a test with expect statements for each of the variables provided.
//  describe("fibonacci",() => {
//    it("returns the fibonacci sequence and given length", () => {
//      expect(fibonacciNum(fibonacciLength1)).toEqual([1,1,2,3,5,8])
//      expect(fibonacciNum(fibonacciLength2)).toEqual([1,1,2,3,5,8,13,21,34,55])
//    })
//  })
// // ReferenceError: fibonacciNum is not defined
// const fibonacciLength1 = 6
// // Expected output: [1, 1, 2, 3, 5, 8]

// const fibonacciLength2 = 10
// // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// // b) Create the function that makes the test pass.
// // I created a function called fibonacciNum to keep it simple. For the parameter I named it number as my place holder.
const fibonacciNum = (number) => {
  // I created a new variable using const newFibonacciNum with the assigned value of an array [1,1]. Because Fibonacci starts at and uses it's last 2 numbers combined for the new one ex 1,1,2,3 0+1=1 then 1+1=2, 2+1=3 so on
  const newFibonacciNum = [1, 1]
  //in the for loop we let i=2 because we already have the first two elements in newFiboncacciNum, then used the increment operator to loop till the condition is met.
  for (let i = 2; i < number; i++) {
    //   // we use the i to call the index then we use newFabonacciNum[i-1] to go back one element and newFibonacciNum[i-2] to go back 2 elements. Then we add them and get our new element value.
    newFibonacciNum[i] = newFibonacciNum[i - 1] + newFibonacciNum[i - 2]
  }
  return newFibonacciNum
}
// // we call the function fibonacciNum then we call the argument resulting with!
console.log(fibonacciNum(fibonacciLength1))
// // [ 1, 1, 2, 3, 5, 8 ]
console.log(fibonacciNum(fibonacciLength2))
// // [1,  1,  2,  3,  5, 8, 13, 21, 34, 55]


// Pseudo code:

// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
describe("studyMinutes", () => {
  it("takes an object and sorts the classes into an array from least to greatest", () => {
    expect(studyMinutes(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(studyMinutes(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })

})
//  ReferenceError: studyMinutes is not defined
const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.
// I created a function named studyMinutes to relate to both the objects given above.
const studyMinutes = (obj) => {
  // I created a new variable sortedArray then using Object.values() extracting the values of the object that I call. 
  // I use the .sort() method and compare the values in the object both a,b are parameters then using the syntax arrow we compare a-b if the result is negative then a will go before b. example in studyMinutesWeek1 it will take the key and its value so wednesday: 15 and subtract thursday:30 resulting in -15 so this will be placed at the front. 
  // SIDE NOTE!!! I still don't completely understand how the .sort() comparison method works I know if it's negative it will go left if 0 it stay and if its positive it will shift right. you can reverse this by using the a+b instead going from greatest to least.
  const sortedArray = Object.values(obj).sort((a, b) => a - b)
  // return the new varaible sortedArray to sort the variables studyMinutesWeek1 and 2
  return sortedArray
}
// create a new variable to combine both the function studyMinutes with the sorted logic inside and the variable studyMinutesWeek1 and 2 as arguments
const sortedWeek1 = studyMinutes(studyMinutesWeek1)
const sortedWeek2 = studyMinutes(studyMinutesWeek2)
// invoke sortedWeek1 and 2 to print to the console and see your results!
console.log(sortedWeek1)
// [15, 15, 20, 30,30, 60, 90]
console.log(sortedWeek2)
// [10, 15,  20, 45,60, 65, 100]

// Pseudo code: wrote along with the code
// I hit shift-option-f to try and organize the code if it looks terrible plz let me know haha