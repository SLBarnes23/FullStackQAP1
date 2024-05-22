// Log a message using console
console.log('This is a message');

// Access the current working directory using process
console.log('Current working directory:', process.cwd());

// Use setTimeout to schedule a function to be executed after 2 seconds
setTimeout(() => {
  console.log('This message is printed after 2 seconds');
}, 2000);

// Print the absolute path of the currently executing file
console.log('Current file:', __filename);

// Print the absolute path of the directory containing the current file
console.log('Current directory:', __dirname);

// Create a buffer and write some data to it
const buf = Buffer.from('Hello, world!');
console.log('Buffer data:', buf.toString());
