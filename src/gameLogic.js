const checkWinner = () => {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ]
    let currentGameBoard = Array.from(document.getElementsByClassName('game-space'))
    winningCombos.map((winCon => {
        let a = currentGameBoard[winCon[0]].innerText;
        let b = currentGameBoard[winCon[1]].innerText;
        let c = currentGameBoard[winCon[2]].innerText;
        if(a === '' || b === '' || c === ''){
            return
        }
        if(a === b && b === c)  {
            switch(a)   {
                case 'X': alert('Player One Wins');
                currentGameBoard[winCon[0, 2]].style.backgroundColor = 'red'
                return;
                case 'O': alert('Player Two Wins')
                return;
            }
        }
        else return
    }))
}

const playerOne = {
    marker: 'X'
}

function PlayerOne(name, marker) {
    this.name = name;
    marker = 'X'
}

const playerTwo = {
    marker: 'O'
}

function PlayerTwo(name, marker)    {
    this.name = name;
    marker = 'O'
}


let currentTurn = 0;
const decideCurrentPlayer = () => {
    if(currentTurn % 2 === 0)   { 
        currentTurn +=1;
        return(playerOne.marker);
    }
    else{
        currentTurn +=1;
        return(playerTwo.marker);
    };
    
}





const takeTurn = (e) => {
    let currentPlayer = decideCurrentPlayer()
    if(currentTurn <= 9){
    // Checks the square the user clicked in to verify its empty.
    switch(e.target.innerText)  {
        case 'X': alert('That spot is already occupied, please try again');
        break;
        case 'O': alert('That spot is already occupied, please try again');
        break;
        case '': e.target.innerText = currentPlayer
    }
    checkWinner();
}
}

const clearBoard = () => {
    let currentGameBoard = Array.from(document.getElementsByClassName('game-space'))
    currentGameBoard.map((space => {
        space.innerText = '';
        currentTurn = 0;
    }))
}

export {clearBoard, takeTurn}
