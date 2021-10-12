import React from 'react';
import Square from './Square';

import { BoardContainer, BoardMain, BoardHeader } from './Board.styled';


const Board = ({onClick, squares}) => {
    return (
        <>
        <BoardMain>
            <BoardHeader>Tic-Tac-Toe Game</BoardHeader>
            <BoardContainer>
                {squares.map((square, i) => (
                    <Square key={i} value={square} onClick={() => onClick(i)} />
                ))}
                
            </BoardContainer>
        </BoardMain>
        </>
    )
}

export default Board;
