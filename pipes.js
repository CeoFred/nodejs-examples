// read and writing data in chunks
const fs = require('fs');
const zlib = require('zlib');
// zlib is for compressing files
const gzip = zlib.createGzip();

//pipes allows us to take chunks from the sreadstream to the write strea,
const readStream = fs.createReadStream('./exam.txt','utf8');
const writeStream =  fs.createWriteStream('./exam2.gz');

// compress the data and write the fle to our write stream,
// files to be written to should be a .gz file
readStream.pipe(gzip).pipe(writeStream);