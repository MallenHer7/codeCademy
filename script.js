let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () =>{
  let targetNum = Math.floor(Math.random()*9);
  return targetNum
}


const compareGuesses = (user, computer, targetNum) => {
  let differenceUser = getAbsoluteDistance(user, targetNum);
  let differenceComputer = getAbsoluteDistance (computer, targetNum);
  if(differenceUser < differenceComputer){
    return true
  }else if (differenceUser > differenceComputer ) {
    return false
  }else if (differenceUser == differenceComputer){
    return true
  }
}



const updateScore = winner => {
  if(winner === 'human'){
    return humanScore ++
  }else if(winner === 'computer'){
    return computerScore ++
  }
}

const advanceRound = () => 
 currentRoundNumber ++;


const getAbsoluteDistance = (num, num2) => {
  if(num >= 0 && num <= 9){
    let dis = Math.abs(num - num2);
    return dis
  }else{
    alert('tu numero esta fuera de rango');
  }
};
