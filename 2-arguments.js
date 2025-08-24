// process.argv is an array containing the command-line arguments.
// The first element is 'node', the second element is the name of the JavaScript file.
// So, we need to check the length of process.argv to determine the number of actual arguments.
// Actual arguments start from index 2.

const numberOfArguments = process.argv.length - 2; // Subtract 2 to get only the custom arguments

if (numberOfArguments === 0) {
  console.log("No argument");
} else if (numberOfArguments === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}