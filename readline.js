const readline = require('readline');
// allows us to prompt the user and also get user inputs
const rl = readline.createInterface({input: process.stdin,
                         output: process.stdout});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2 ;

rl.question(`What is ${ num1 } + ${ num2 }? \n`,
(userInput) => {
    if(userInput.trim() == answer){
        // console.log('Correct!!');
        rl.close();
    }else{
        rl.setPrompt('Incorrect response please try again \n');
        rl.prompt();
    
    }
    rl.on('line', (userInput) => {
        if(userInput == answer){
            rl.close();
        }else{
            rl.setPrompt(`Your anser of ${ userInput } is incorrect,try again \n`);
            rl.prompt();
        }
                });
});

rl.on('close', () => console.log('Correct!!!'));

