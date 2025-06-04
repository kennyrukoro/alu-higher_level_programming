#!/usr/bin/env node
const fs = require('fs');

// Get the file path from command line arguments
const filePath = process.argv[2];

if (!filePath) {
    console.error('Please provide a file path as the first argument');
    process.exit(1);
}

// Read the file in utf-8 encoding
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        // If there's an error, print the error object
        console.error(err);
    } else {
        // Otherwise, print the file content
        console.log(data);
    }
});
