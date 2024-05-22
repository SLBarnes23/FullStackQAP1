const express = require('express');
const app = express();
const port = 3000;

// Array of quotes
const quotes = [
  "Absolute power corrupts, absolutely - Lord Acton",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer"
];

// Function to get a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Route to get a random quote
app.get('/quote', (req, res) => {
  const randomQuote = getRandomQuote();
  res.send(randomQuote);
});

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Quote of the Day API! Visit /quote to get a random quote.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
