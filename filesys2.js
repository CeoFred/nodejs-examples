const fs = require('fs');
// create a folder
// fs.mkdir('tutorial', (err) => {
//     if(err)
//     console.log(err);
//     else
//     // remove a folder
//         fs.rmdir('tuitorial',(err) => {
//             if(err)
//                 console.log(err);
//                 else{
//                     console.log('Successfully deleted');
//                 }
//         });
// })

//make folder and add a file to it
// fs.mkdir('tutorial', (err) => {
//     if(err)
//     console.log(err);
//     else{
//         fs.writeFile('./tutorial/exaple.txt','123',(err) => {
//             if(err)
//             console.log(err);
//             else{
//                 console.log('File created');
//             }
//         });
//     }
// });


// delete a file in the folder to be deleted first before removing the folder
// fs.unlink('./tutorial/exaple.txt',(err) => {
//     if(err)
//     console.log(err);
//     else{

//         fs.rmdir('tutorial',(err) => {
//             if(err)
//               console.log(err);
//               else{
//         console.log('Folder deleted');
//               }
//         });
//     }
// });

//remove multiple files
fs.readdir('./exam',(err,files) => {
if(err){
    console.log(err);
}else{
   files =  [...files];
   for(let file of files){
       fs.unlink('./exam/' + file, (err) => {
           if(err)
           console.log(err);
           else{
               console.log('File deleted');
           }
       });
   }
}
});