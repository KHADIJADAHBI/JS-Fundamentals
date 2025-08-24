// process.argv contains the command-line arguments.
// process.argv[0] is 'node'
// process.argv[1] is the script file name
// process.argv[2] is the first actual argument

const firstArgument = process.argv[2]; // Access the first argument directly

// Check if the first argument is undefined (meaning no argument was passed)
if (firstArgument === undefined) {
  console.log("No argument");
} else {
  console.log(firstArgument); // Print the first argument
}