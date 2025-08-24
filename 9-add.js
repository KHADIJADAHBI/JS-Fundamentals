// Define the add function as required: function add(a, b)
function add(a, b) {
  // It's good practice to ensure inputs are numbers before addition,
  // but parseInt will handle non-numeric strings to NaN.
  return a + b;
}

// process.argv contains the command-line arguments.
// process.argv[2] is the first actual argument
// process.argv[3] is the second actual argument

const firstNum = parseInt(process.argv[2]);  // Convert first argument to integer
const secondNum = parseInt(process.argv[3]); // Convert second argument to integer

// Call the add function with the converted numbers and print the result
console.log(add(firstNum, secondNum));