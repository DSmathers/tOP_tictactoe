import React from 'react'
import { clearBoard } from '../gameLogic'

const Header = () => {
    return (
        <div id="header">
            <h1>Tic-Tac-Toe</h1>
            <div id='game-controls'>
                <button id="new-game-btn" onClick={() => console.log('clicked')}>New Game</button>
                <button id="clear-board-btn" onClick={clearBoard}>Clear Board</button>
            </div>
        </div>
    )
}

export default Header
