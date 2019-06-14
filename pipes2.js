// uncompress a .gz file
const fs = require('fs');
const zlib = require('zlib');
// zlib is for compressing files
const unzip = zlib.createGunzip();

const readStream = fs.createReadStream('./exam2.txt.gz');
const writeStream =  fs.createWriteStream('./uncompresses.txt');

readStream.pipe(unzip).pipe(writeStream);