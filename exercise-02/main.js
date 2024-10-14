
// function computerOption(){
//     const options = [`rock`, 'paper', 'scissors'];
//     const randomIndex = Math.floor(Math.random() * options.length);
//     return options[randomIndex];
// }

// function newRound(){
//     console.log('');
//     console.log(`NEW ROUND!`);
    
//     const uChoice = prompt(`Input your choice`);

//     const validInput = true;

//     if(validInput){
//         const cChoice = computerOption();
//         const result = detectWinner(uChoice, cChoice);
//         console.log(result);
//     }
//     else{
//         console.error(`Invalid input: ${uChoice}`);
//     }
// }


// function detectWinner(userChoice, computerChoice){
//     console.log(`User's choice: ${userChoice}`);
//     console.log(`Computers's choice: ${computerChoice}`);

// let computerChoice;
// let userChoice;
// let result;
// let options = [0, 1, 2];

function getResult(uChoice, cChoice){
    if(uChoice == cChoice){
        console.log(uChoice);
        console.log(cChoice);
        return `You tied`;
    }else if(uChoice == 1, cChoice == 0){
        console.log(uChoice);
        console.log(cChoice);
        return `You won!`;
    }else if(uChoice == 2, cChoice == 1){
        console.log(uChoice);
        console.log(cChoice);
        return `You won!`;
    }else if(uChoice == 0, cChoice == 2){
        console.log(uChoice);
        console.log(cChoice);
        return `You won!`;
    }else if(uChoice == 0, cChoice == 1){
        console.log(uChoice);
        console.log(cChoice);
        return `You lost!`;
    }else if(uChoice == 1, cChoice == 2){
        console.log(uChoice);
        console.log(cChoice);
        return `You lost!`;
    }else if(uChoice == 2, cChoice == 0){
        console.log(uChoice);
        console.log(cChoice);
        return `You lost!`;
    }
}


