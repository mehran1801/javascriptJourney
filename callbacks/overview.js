//static.frontendmasters.com/resources/2019-09-18-javascript-hard-parts-v2/javascript-hard-parts-v2.pdf

// Functions are special because we can invoke them, but we can still treat them like any other type of data.

// Below, we have an annoyingly long function name that hurts the readability of any code in which it’s used

const announceThatIAmDoingImportantWork = () => {
  console.log("I’m doing very important work!");
};

// Here announceThatIAmDoingImportantWork is not only the name of the function but also a variable that stores the function.
// To rename this function without sacrificing the source code, we can re-assign the function to a variable with a suitably short name:

// This feature gives us the ability to pass a function as an argument to another function.

const busy = announceThatIAmDoingImportantWork;
 
busy(); // This function call barely takes any space!


/*
 ------------------------------------------------------------------------------------------------------------------------------------
?  Important:

 busy is a variable that holds a reference to our original function. If we could look up the address in memory of busy and the address in memory of announceThatIAmDoingImportantWork they would point to the same place. Our new busy() function can be invoked with parentheses as if that was the name we originally gave our function.

 Notice how we assign announceThatIAmDoingImportantWork without parentheses as the value to the busy variable. We want to assign the value of the function itself, not the value it returns when invoked.

 In JavaScript, functions are first class objects. This means that, like other objects you’ve encountered, JavaScript functions can have properties and methods. 

 ------------------------------------------------------------------------------------------------------------------------------------
*/

function nineSquared() {
  return 9 * 9;
}

function tenSquared() {
  return 10 * 10;
}

// console.log(nineSquared(), tenSquared());

//  ! What's wrong here and What principle are we breaking??  DRY..

// ? We can generalize the function to make it reusable.

function squareNum(num) {
  return num * num;
}

squareNum(9);
squareNum(8);
squareNum(10);

function copyArrayAndMultiplyBy2(arr) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(arr[i] * 2);
  }
  return output;
}

const myArray = [1, 2, 3];
const result = copyArrayAndMultiplyBy2(myArray);

// ~ What if we want to copy array and divide by 2 , we need to write another function with changes like this... arr[i] / 2
// ~ or if we want to add 3 .. we will write function with these changes arr[i] +3;

// &  What principle are we breaking? DRY...

// * we should only write one function 
// todo We could generalize our function - So we pass in our specific instruction only when we run copyArrayAndManipulate !

function copyArrayAndManipulate(arr, callback) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(callback(arr[i]));
  }
  return output;
}

// ? Now you can have indidual functions like multiplication, addition or division and put in as argument as 'callback';

function multiplyBy2(input) {
  return input * 2;
}

// Lets call that versatile function now

const result2 = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
// console.log(result);

// ! How was this possible?

//     ? Functions in javascript = first class objects, They can co-exist with and can be treated like any other javascript object, Since functions are a type of object, they have properties such as .length and .name, and methods such as .toString()

// ~ 1. Assigned to variables and properties of other objects
// ~ 2. Passed as arguments into functions
// ~ 3. Returned as values from functions

// ! Which is our Higher Order Function ? The outer function that takes in a function is our higher order function , just a term to describe these functions.This enables us to build abstractions on other abstractions, just like “We hosted a birthday party” is an abstraction that may build on the abstraction “We made a cake.”

// Abstraction allows us to write complicated code in a way that’s easy to reuse, debug, and understand for human readers.

// ? Which is our Callback Function ---> The function we insert is our callback function, Callback functions get invoked during the execution of the higher-order function. REMEMBER: you can put in reference of any callback function or actual function code as parameter/argument (anonymous function). e.g

// higherOrderFunc(() => {
//   for (let i = 0; i <= 10; i++) {
//     console.log(i);
//   }
// });

// ~ Callbacks and Higher Order Functions simplify our code and keep it DRY

// Declarative readable code: Map, filter, reduce - the most readable way to write code to work with data

// Asynchronous JavaScript: Callbacks are a core aspect of async JavaScript, and are under-the-hood of promises, async/await

// todo We can even pass in multiplyBy2 directly without a name, but it's still the code of a function being passed,  check the code below.

// function copyArrayAndManipulate(array, callback) {
// const output = [];
// for (let i = 0; i < array.length; i++) {
// output.push(callback(array[i]));
// }
// return output;
// }
// const multiplyBy2 = input => input*2
// const result = copyArrayAndManipulate([1, 2, 3], input => input*2);



//  ? Question: How often should we be defining and using our own functions?

// & Answer: The quick answer is that we should almost always be looking for opportunities to divide our programs into functions. This helps our programs to be more compact, readable, and manageable.

// Choosing how to divide our programs into functions requires that we be thoughtful; the key is to find the right level of generality. For instance, don’t write multiple functions like add2toNumber(x), add7toNumber(x), etc. Instead define a function like increment(x,n) which will add n to x. This is a silly example of course but it is meant to highlight the importance of finding the bigger problem that we’re solving – we’re not adding 2 or 7 to a number; we’re incrementing a number.

// Searching for the bigger problem that you’re solving with some code will guide you in defining functions and will also make sure that you’re not defining unnecessarily many.

const higherOrderFunc = (param) => {
  param(); // it is not returned here, it got invoked.
  return `I just invoked ${param.name} as a callback function!`;
};
// Inside the body, param gets invoked using parentheses. And finally, a string is returned, telling us the name of the callback function that was passed in.
const anotherFunc = () => {
  return "I'm being invoked by the higher-order function!";
};

// console.log(higherOrderFunc(anotherFunc));

// higher-order functions are used in some of the most important and widely-used JavaScript methods, iterators!