const tutorials = [
  "what does the this keyword mean?",
  "what is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?"
];

function titleCased() {
  return tutorials.map(tutorial => {
    return tutorial
      .split(" ") // Split each string into an array of words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
      .join(" "); // Join words back into a string
  });
}

// Test it
console.log(titleCased());

