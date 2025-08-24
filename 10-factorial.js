// Define the factorial function using recursion
function factorial(n) {
  // Base case 1: Factorial of NaN or 0 is 1, as per common definitions and task requirement for NaN.
  // A non-positive integer factorial is also 1 in many contexts (or undefined, but here 1 for NaN).
  if (isNaN(n) || n <= 0) {
    return 1;
  }
  // Base case 2: Factorial of 1 is 1
  if (n === 1) {
    return 1;
  }
  // Recursive step: n * factorial(n - 1)
  return n * factorial(n - 1);
}

// process.argv contains the command-line arguments.
// process.argv[2] is the first actual argument, which is the number for factorial calculation.

const inputNumber = parseInt(process.argv[2]); // Convert the first argument to an integer

// Call the factorial function and print the result
console.log(factorial(inputNumber));