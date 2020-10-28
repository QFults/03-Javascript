
// Function Definition

// Hoisting allows this to be called before it is defined
// myFunction()

// function myFunction () {
//   console.log('hi')
// }

// -------------------------

// Function assigned to variable with arrow function
// const myFunction = () => {
//   console.log('hi')
// }

// myFunction()

// -------------------------

// Arrow function with multiple parameters
// const myFunction = (message, num) => {
//   console.log(`Message: ${message}`)
//   console.log(`Number: ${num}`)
// }

// myFunction('Hello World!', 10)
// myFunction('Goodbye World!')

// -------------------------

// Spooky Banana
// ('b' + 'a' + + 'a' + 'a').toLowerCase()

// -------------------------

// Math Functions

// const adder = (a, b) => {
//  console.log(a + b)
// }

// adder(5, 7)

// const subtracter = (a, b) => {
//   console.log(a - b)
// }

// subtracter(10, 5)

// const multiplier = (a, b) => {
//   console.log(a * b)
// }

// multiplier(40, 3)

// const divider = (a, b) => {
//   console.log(a / b)
// }

// divider(38, 17)

// -------------------------

// Scoping: Variables available within {} and down


// const myFunction = () => {

  // const otherFunction = () => {

    // const otherOtherFunction = () => {
      // num is declared three functions down
      // let num = 5
//     }

//     otherOtherFunction()
//   }
  
//   otherFunction()
// }

// num is NOT available outside of otherOtherFunction
// console.log(num)
// myFunction()

// -------------------------

// Chaining Functions

// You can do this before defining adder
// const wrapper = (a, b) => {
//   adder(a, b)
// }

// const adder = (a, b) => {
//   console.log(a + b)
// }

// This runs after adder is declared, so there is no problem
// wrapper(5, 7)

// -------------------------

