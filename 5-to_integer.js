// process.argv contains the command-line arguments.
// process.argv[2] is the first actual argument

const firstArgument = process.argv[2];

// Attempt to convert the first argument to an integer
const convertedNumber = parseInt(firstArgument);

// Check if the convertedNumber is actually a number and not NaN (Not-a-Number)
// isNaN(value) returns true if value is NaN, and false otherwise.
// We also handle the case where no argument is passed (firstArgument is undefined).
if (isNaN(convertedNumber) || firstArgument === undefined) {
  console.log("Not a number");
} else {
  console.log(`My number: ${convertedNumber}`);
}