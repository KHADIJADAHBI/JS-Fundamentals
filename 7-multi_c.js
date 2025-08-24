// process.argv contains the command-line arguments.
// process.argv[2] is the first actual argument

const numOccurrences = parseInt(process.argv[2]); // Convert the first argument to an integer

// This is the first allowed console.log
if (isNaN(numOccurrences) || numOccurrences <= 0) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  let outputString = ""; // Build the string in a loop
  while (i < numOccurrences) {
    outputString += "C is fun\n"; // Append the message and a newline
    i++;
  }
  // This is the second allowed console.log, which prints the entire built string
  console.log(outputString.trim()); // .trim() removes the last extra newline
}