// process.argv contains the command-line arguments.
// process.argv[2] is the first actual argument, representing the size of the square.

const firstArgument = process.argv[2];
const size = parseInt(firstArgument); // Convert the first argument to an integer

// Check if the argument is missing or cannot be converted to a valid positive number
if (firstArgument === undefined || isNaN(size)) {
  console.log("Missing size");
} else if (size > 0) { // Only proceed if the size is a positive integer
  let row = 0;
  // Outer loop for rows
  while (row < size) {
    let column = 0;
    let rowOfX = ""; // String to build one row of 'X' characters
    // Inner loop for columns (to build a single row)
    while (column < size) {
      rowOfX += "X"; // Add 'X' character to the current row string
      column++;
    }
    console.log(rowOfX); // Print the complete row
    row++;
  }
}
// If size is 0 or negative, this else-if block is skipped,
// and nothing is printed, as per the requirement.