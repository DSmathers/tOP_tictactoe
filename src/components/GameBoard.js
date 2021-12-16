import React from 'react'

const GameBoard = ({}) => {
    const gameSpaces = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
    return (
        <section id="game-board">
            {gameSpaces.map((space => (
                <div    
                    key={gameSpaces.indexOf(space)} 
                    id={space} 
                    className="game-space">
                </div>
            )
            ))}
        </section>
    )
}

export default GameBoard
