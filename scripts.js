// Filler JavaScript

// Function to generate a random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Array of sample data
const data = [
  { name: 'John', age: 25, city: 'New York' },
  { name: 'Alice', age: 30, city: 'San Francisco' },
  { name: 'Bob', age: 22, city: 'Los Angeles' },
  { name: 'Eva', age: 28, city: 'Chicago' },
  { name: 'David', age: 35, city: 'Miami' },
];

// Function to log data to the console
function logData() {
  console.log('Logging data:');
  data.forEach((item, index) => {
    console.log(`${index + 1}. Name: ${item.name}, Age: ${item.age}, City: ${item.city}`);
  });
}

// Event listener for a button click
document.getElementById('logButton').addEventListener('click', logData);

// Timeout function to simulate asynchronous behavior
setTimeout(() => {
  console.log('Async operation completed!');
}, 2000);
