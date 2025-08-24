// Define an array of strings containing the messages
const languages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

let output = ""; // Initialize an empty string to build the output

// Loop through the array and append each message followed by a newline character
// The for...of loop is ideal here to iterate over array elements.
for (const language of languages) {
  output += language + "\n"; // Append the language and a newline for formatting
}

// Print the entire constructed string using a single console.log
console.log(output.trim()); // .trim() removes any trailing newline at the very end