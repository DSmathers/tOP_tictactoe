import React, { useState } from "react"


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
                return 'Player One'
                case 'O': alert('Player Two Wins');
                return
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



const decideCurrentPlayer = (currentTurn) => {
    if(currentTurn % 2 === 0)   { 
        return(playerOne);
    }
    else{
        return(playerTwo);
    };
    
}




let currentTurn = 0;
const takeTurn = (e) => {
    let currentPlayer = decideCurrentPlayer(currentTurn)
    
    if(currentTurn <= 9){
    // Checks the square the user clicked in to verify its empty.
    switch(e.target.innerText)  {
        case 'X': alert('That spot is already occupied, please try again');
        break;
        case 'O': alert('That spot is already occupied, please try again');
        break;
        case '': 
            e.target.innerText = currentPlayer.marker;
            currentTurn += 1;
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
