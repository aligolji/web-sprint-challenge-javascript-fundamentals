// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

  /* There is a closure created between nestedFunction and its parent function, myFunction. Functions can access variables outside of their own scope to find the variable that has been passed to it. Since the variable internal is not defined within function nestedFunction, nestedFunction can access the variable internal from its parent function, which internal is in closure with. */

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(number){

  let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    return sum;
 };
 
 console.log(summation(4));