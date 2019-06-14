// helps use to create files files,deleted files, read files, create folder
const fs = require('fs');
// create a file
// fs.writeFile('example.txt',"This is an example", (err) => {
//     if(err)
//        console.log(err);
//        else{

//         console.log('File created');
//         // read file
//         fs.readFile('example.txt','utf8',(err,file)=>{
//             if(err)
//             console.log(err);
//             else
//                 console.log(file);
//         });
//        }
// });

// rename a file
// fs.rename('example.txt','example2.txt',(err) => {
//     if(err)
//             console.log(err);
//             else
//             console.log('Successfully renamed the file');
// });

// append data to a file
// fs.appendFile('example2.txt','Some data appended', (err) => {
//     if(err)
//         console.log(err);
//         else
//             console.log('Successfully appended data to file');
// });

// delete a file
fs.unlink('example2.txt', err => console.log(err));

