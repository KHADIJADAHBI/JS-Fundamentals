// process.argv contains the command-line arguments.
// process.argv[0] is 'node'
// process.argv[1] is the script file name
// process.argv[2] is the first actual argument
// process.argv[3] is the second actual argument

const firstArgument = process.argv[2];
const secondArgument = process.argv[3];

// Print the arguments in the specified format: "firstArgument is secondArgument"
console.log(`${firstArgument} is ${secondArgument}`);