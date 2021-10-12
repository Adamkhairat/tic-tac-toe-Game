import styled from 'styled-components';

export const WinnerDiv = styled.div`
    width: 200px;
    margin: 20px auto;

`;

export const WinnerP = styled.p`
    color: darkblue;
    font-size: 20px;
    text-transform: uppercase;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const JumpList = styled.li`
    list-style: none;
    padding: 10px
`;

export const JumpButton = styled.button`
    padding: 15px 20px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: lightblue;
    /* color: white; */
    color: darkblue;
    border: 1px solid darkblue;
    transition: 0.3s;

    &:hover{
        background-color: darkblue;
        color: white;
        border: 1px solid darkblue;
    }
`;