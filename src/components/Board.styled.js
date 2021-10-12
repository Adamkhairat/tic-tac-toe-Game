import styled from 'styled-components';

export const BoardMain = styled.div`
    align-items: center;
`;

export const BoardHeader = styled.h1`
    display: flex;
    color: darkblue;
    margin-top: 80px;
    justify-content: center;
    font-size: 50px;
    font-weight: 800;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    @media only screen and (max-width: 600px){
        font-size: 40px;
    }
`;

export const BoardContainer = styled.div`
    border: 2px solid darkblue;
    border-radius: 5px;
    width: 250px;
    height: 250px;
    margin: 0 auto;
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`