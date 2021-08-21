console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}

// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, ' + name;
} //end helloName


// Remember to call the function to test
console.log('helloName:', helloName( 'Freya' ) );

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  console.log( 'adding', firstNumber, 'and', secondNumber);
  
  return firstNumber + secondNumber;  //adding the numbers in return
  // return firstNumber + secondNumber;
} //end addNumbers
console.log('addNumbers:', addNumbers( 25, 30 ));


// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber ){
  console.log('calculating:', firstNumber, 'x', secondNumber, 'x', thirdNumber);
  return firstNumber * secondNumber * thirdNumber;

} //end multiplyThree
console.log('multiplyThree:', multiplyThree(2,10,5));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  console.log('Positive test number:', number);
  if ( number > 0 ){
    return 'true';
  } //end if
  else {
    return 'false';
  } //end else  

} //end isPositive

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let favoriteFoods = ['Pizza', 'Tacos', 'kimchi jjigae'];

function getLast( array ) {
  console.log('array:', array);
  let lastItem = array [array.length - 1];
  return lastItem;
} //end getLast
console.log('last item:', getLast (favoriteFoods));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find( value, array ){
  for (let i = 0; i < array.length; i++) {
    if (value === array [i]){
      return 'true. ' + value + ' was found!';
    } //end if
    else {
      return 'false. ' + value + ' was not found!';
    } //end else
  } //end for
  
} //end find
//checking for true.
console.log('is Pizza in favoriteFoods?', find( 'Pizza', favoriteFoods)); 
//checking for false
console.log('is Liver in favoriteFoods?', find( 'Liver', favoriteFoods));



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  console.log('string:', string);
  console.log('letter:', letter);
  if ( letter === string [0] ){
    return 'true';
    
  } //end if
  else {
    return 'false';
  }//end else
} // end isFirstLetter

console.log( 'isFirstLetter - should say true:', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false:', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  console.log('array:', array);
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++) {
    sum += array [i];
    
  } //end for
  return sum;
}
let sumNumbers = [10, 11, 12];
console.log('sum of array:', sumAll(sumNumbers));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function posArray(array) {
  let positiveNumbers = []
  console.log('array:', array);
  for (let i = 0; i < array.length; i++) {
    if (array [i] > 0){
      positiveNumbers.push(array [i]);
    }//end if
  } //end for
  return positiveNumbers
}
//mixed array
console.log('Positive numbers from array:', posArray([0, 3, -2, 5, 9])); 
//all not positive
console.log('Positive numbers from array:', posArray([0, -3, -2, -5, -9])); 

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

///////Power calculator from edabit/////
// https://edabit.com/challenge/wAdE9te55cowBLcPs
// Create a function that takes voltage and current and returns the calculated power.
// outputs are in KW vs W which is more typically used in the industry.
//side note: I work as and electrician so I am adding in the phase to determine if it is 3phase or single phase loads.
function powerCalc(voltage, current, phase) {
  let kiloWatt = 0
  console.log('voltage:', voltage, 'current:', current, 'phase:', phase);
  if (phase === 1){
    kiloWatt = (voltage * current)/1000;

  } //end if
  else if (phase === 3){
    kiloWatt = (voltage * current * 1.732)/1000;

  } //end else if
  else {
    kiloWatt = 'invalid input';
  }
  return kiloWatt;
}
// single phase 230V 10amp load
console.log('Wattage:', powerCalc(230, 10, 1), 'KW');

// single phase 110V 3amp load
console.log('Wattage:', powerCalc(110, 3, 1), 'KW');

// three phase 110V 3amp load
console.log('Wattage:', powerCalc(110, 3, 3), 'KW');

// three phase 480V 20amp load
console.log('Wattage:', powerCalc(480, 20, 3), 'KW');

// single phase 480V 20amp load
console.log('Wattage:', powerCalc(480, 20, 1), 'KW');

