import React from 'react';
import { SquareButton } from './Square.styled';

const Square = ({onClick, value}) => {
    return (
        <SquareButton onClick={onClick}>
            {value}
        </SquareButton>
    )
}

export default Square;
