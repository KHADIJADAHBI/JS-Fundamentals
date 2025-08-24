// process.argv contains the command-line arguments.
// process.argv[2] is the first actual argument

const numOccurrences = parseInt(process.argv[2]); // Convert the first argument to an integer

// Check if the argument is a valid positive number
// This covers cases where no argument is passed (undefined), or it's not a number, or it's not positive.
if (isNaN(numOccurrences) || numOccurrences <= 0) {
  console.log("Missing number of occurrences"); // First allowed console.log
} else {
  let i = 0; // Initialize a counter for the loop
  while (i < numOccurrences) {
    console.log("C is fun"); // Second allowed console.log (this will be called multiple times by the loop)
    i++; // Increment the counter
  }
}