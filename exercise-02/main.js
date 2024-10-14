

const options = ['rock', 'paper', 'scissors'];
function computerOption(){
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}


function newRound(){
    console.log('');
    console.log(`NEW ROUND!`);
    
    const uChoice = prompt(`Input your choice`);

    let validInput;
    validInput = validity(uChoice);

    if(validInput === `1`){
        const cChoice = computerOption();
        const result = detectWinner(uChoice, cChoice);
        console.log(result);
    }
    else{
        console.error(`Invalid input: ${uChoice}`);
    }
}


function detectWinner(userChoice, computerChoice){
    console.log(`User's choice: ${userChoice}`);
    console.log(`Computers's choice: ${computerChoice}`);
    return result = getResult(userChoice, computerChoice);
}

function getResult(a, b){
    if(a === b){
        return `Its a tie!`
    }else if(a === `rock` && b === `paper`){
        return  `You lost!`
    }else if(a === `paper` && b === `scissors`){
        return `You lost!`
    }else if(a === `scissors` && b === `rock` ){
        return `You lost`
    }else{
        return `You won!`
    }
}

function validity(a){
    if(a ==`rock`){
        return `1`;
    }else if(a == `paper`){
        return `1`;
    }else if(a == `scissors`){
        return `1`;
    }else
        return `0`;
}