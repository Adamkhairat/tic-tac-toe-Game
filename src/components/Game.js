import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';

import { WinnerDiv, WinnerP, JumpList, JumpButton } from './Game.styled';

const Game = () => {

    //array of nine different elements
    const [history, setHistory] = useState([Array(9).fill(null)]); //making it an aray because we're saving the state of the array so we can jump back and forth 
    //state that will give us the most recent step
    const [stepNumber, setStepNumber] = useState(0);
    // state that tells us wether X or O is next
    const [xIsNext, setXisNext] = useState(true);
    //state that will tell us if the move is a winning move or not
    const winner = calculateWinner(history[stepNumber]);

    const handleClick = i => {
        //when we jump back in state, slice the history we don't need and gives us the recent move or step number(anyone)
        const timeInHistory = history.slice(0, stepNumber + 1);
        //most current move
        const current = timeInHistory[stepNumber];
        //clone of the state we're going to mutate

        const squares = [...current];
        // If user click an occupied square or if game is won, return null
        if (winner || squares[i]) return;
        // if (winner === 'X' || 'O') return 'yooo'
        //Put an X or an O in the clicked square
        squares[i] = xIsNext ? 'X' : 'O';
        //set history and spread time in history because i want to keep the state and gives it squares that the most recent state
        setHistory([...timeInHistory, squares]);
        //gives us the new stepNumber
        setStepNumber(timeInHistory.length);
        setXisNext(!xIsNext);
    }

    const jumpTo = step => {
        setStepNumber(step);
        setXisNext(step % 2 === 0)
    }

    const renderMoves = () => (
        history.map((_step, move) => {
            //render the buttons where we move back and forth 
            const destination = move ? `Go back to last move` : `New Game`;
            return (
                <JumpList key={move}>
                    <JumpButton onClick={() => jumpTo(move)}>{destination}</JumpButton>
                </JumpList>
            )
        })
        
    )

    return (
        <>
        <Board squares={history[stepNumber]} onClick={handleClick} />
        <WinnerDiv>
            {/* check if there's a winner, if true, display winner else check is X is next or O and display it */}
            <WinnerP>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</WinnerP>
            {renderMoves()}
        </WinnerDiv>
        </>
    )
}

export default Game;
