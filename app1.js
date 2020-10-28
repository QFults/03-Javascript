
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

// Objects

// let dog = {
//   name: 'Beef',
//   breed: 'Chihuahua',
//   age: 5,
//   puppies: [
//     {
//       name: 'Chicken',
//       breed: 'Chihuahua',
//       age: 1
//     },
//     {
//       name: 'Onions',
//       breed: 'Chihuahua',
//       age: 1
//     },
//     {
//       name: 'Barley',
//       breed: 'Chihuahua',
//       age: 1
//     }
//   ]
// }

// Access value with dot notation
// console.log(dog.name, dog.breed)

// Grabbing object properties off arrays off objects
// console.log(dog.puppies[1].name)

// -------------------------

// Create 5 user objects in the users array, each with key/value pairs for name, email, address, and phone
// let users = [
//   {
//     name: 'John Doe',
//     email: 'johndoe@gmail.com',
//     address: '123 Main St',
//     phone: '(123) 456-7890'
//   }
// ]

// Here we are given a cob-web of items. Let's dig in and grab the items we need.
// let theCobWeb = {
//   biggestWeb: {
//     item: 'comb',
//     biggerWeb: {
//       items: ['glasses', 'paperclip', 'bubblegum'],
//       smallerWeb: {
//         item: 'toothbrush',
//         tinyWeb: {
//           items: ['toenails', 'lint', 'wrapper', 'homework']
//           }
//       }
//     },
//     otherBigWeb: {
//       item: 'headphones'
//     }
//   }
// }
// "I found my homework!"
// console.log(`I found my ${theCobWeb.biggestWeb.biggerWeb.smallerWeb.tinyWeb.items[3]}!`)

// "I found my headphones!"
// console.log(`I found my ${theCobWeb.biggestWeb.otherBigWeb.item}!`)

// "I found my glasses!"
// console.log(`I found my ${theCobWeb.biggestWeb.biggerWeb.items[0]}!`)

// "I found my toothbrush!"
// console.log(`I found my ${theCobWeb.biggestWeb.biggerWeb.smallerWeb.item}!`)
