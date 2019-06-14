// read and writing data in chunks
const fs = require('fs');

// writing to files chunk by chunk,
//  before file finishes loading for large text fil
// it is better to use streams other than readfile modules
// a stream uses a small buffer which allows us reading the file in chunks, not everything at once
// readfile uses a full buffer to read the whole file at once which is bad for large files

const readStream = fs.createReadStream('./exam.txt','utf8');
const writeStream =  fs.createWriteStream('./exam2.txt');

readStream.on('data',(chunk) => {
    // send data to a new file in chunks
   writeStream.write(chunk);
   console.log('success');
})