// process.argv contains the command-line arguments.
// process.argv[2] is the first actual argument

const firstArgument = process.argv[2];
const numOccurrences = parseInt(firstArgument); // Convert the first argument to an integer

// Check if the argument is missing or cannot be converted to a number
// This is the first allowed console.log
if (firstArgument === undefined || isNaN(numOccurrences)) {
  console.log("Missing number of occurrences");
} else if (numOccurrences > 0) { // Only proceed if numOccurrences is a positive integer
  let i = 0;
  let outputString = ""; // Build the string in a loop
  while (i < numOccurrences) {
    outputString += "C is fun\n"; // Append the message and a newline
    i++;
  }
  // This is the second allowed console.log, which prints the entire built string
  console.log(outputString.trim()); // .trim() removes the last extra newline
}
// If numOccurrences is 0 or negative, this else-if block is skipped,
// and nothing is printed, which satisfies the requirement for -3 and 0.