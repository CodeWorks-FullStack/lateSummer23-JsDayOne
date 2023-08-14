console.log('javascript loaded')
//#region example code

//SECTION Primitive Data Type, when primitives are passed, they only move their value to a new separate source
// numbers (js uses floats for their numbers)
let jeremysLie = 6
let otherNumber = -6
let decimalNumber = 6.222222222222222
// strings
let greeting = 'Hello'
let anotherGreeting = "Jeremy's lie was that he has 6 cats."
// NOTE ` ` strings can span multiple lines
let otherGreeting = `Jeremy's like was:

 "I have 6 cats."`

//  booleans
let boolean = true
let otherBoolean = false
// truthy falsey, are not true or false literally, but can act as true or false for conditions
let falseNumber = 0
let trueNumber = -5 // literally any number other than 0

let falseString = '' //nothing between the quotes
let trueString = '🐌' //any string with any character becomes true

let moreFalse = undefined
let anotherFalse = null

let moreTrue = [] // even if an array or object are empty they are seen as true
let anotherTrue = {}



//  no values
let noValue // undefined, I don't know there is no value
let unknownValue = undefined // writing this out is wack.

let knownNothing = null // i KNOW there is no value

//SECTION Reference data Types, when reference types are passed, they share the same source
//arrays, store data by position (index)
let arr = ['Jack Sparrow', 'Black Beard', 'Luffy', null]
let nums = [1, 3, 6, 8]
let mixed = ['howdy', 589, true]

//object store data using KEY : VALUE pairs
let obj = {
  dog: 'Dipper',
  cat: 'Georgie',
  weasel: 'Briggs',
  bird: 'Kevin',
}



//SECTION functions
// are blocks of code to store and run later

function sayHello() {
  console.log('hello there')
}

// Parameters
// temporary variables accessible to only this function while it is executing.
function addNumbers(x, y) {
  console.log(x, y)
  console.log(x + y)
  return x + y // returns give back values to those who called them
}
//#endregion

// SECTION APP time

function clickButton() {
  console.log('clicked button')
}

let secretCode = '🦖🦀🌚🦀'

let thingsClicked = ''

// REVIEW you can abstract our your elements for easier access
// let elm = document.getElementById('things-clicked')
// let secretElm = document.getElementById('secret')


function clickDino() {
  console.log('clicked dino', '🦖')
  thingsClicked += '🦖'
  // let elm = document.getElementById('things-clicked')
  // elm.innerText = thingsClicked
  // REVIEW replaced with updateDom call
  updateDom()
}

function clickCrab() {
  console.log('clicked dino', '🦀')
  thingsClicked += '🦀'
  updateDom()
}

function clickMoon() {
  console.log('clicked dino', '🌚')
  thingsClicked += '🌚'
  updateDom()
}

function clearThings() {
  thingsClicked = ''
  updateDom()
}

function submitCode() {
  if (thingsClicked == secretCode) {
    window.alert('you smarty pants')
    revealSecret()
  } else {
    window.alert('you stink')
    window.close()
  }
}

function updateDom() {
  let elm = document.getElementById('things-clicked')
  elm.innerText = thingsClicked
}

function revealSecret() {
  let secretElm = document.getElementById('secret')
  secretElm.classList.remove('d-none')
}

function hideSecret() {
  let secretElm = document.getElementById('secret')
  secretElm.classList.add('d-none')
  clearThings
}




