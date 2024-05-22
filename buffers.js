//BUFFER

const fs = require('fs');
const path = require('path');

// Define the path to the image file
const imagePath = path.join(__dirname, 'Example.jpeg');

// Read the image file into a buffer
fs.readFile(imagePath, (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Print the buffer containing the image data
  console.log('Image buffer:', data);


  // Print the first 100 characters of the buffer as a string
  console.log('Buffer as a string (first 100 chars):', data.toString('utf8', 0, 100));
});





