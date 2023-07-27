const fs = require('fs');
const csv = require('csv-parser');

// Read the content of data.csv and parse it
fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    // Display each row as a table row
    console.table(row);
  })
  .on('end', () => {
    console.log('CSV file reading is complete.');
  });
