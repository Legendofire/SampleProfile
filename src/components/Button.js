import styled, {keyframes} from 'styled-components';

const flipColor= keyframes`
    from{
        background-color: Transparent;
        color: white;
    }
    to{
        background-color: white;
        color: black;
    }
`;

const flipColor_dark= keyframes`
    from{
        background-color: Transparent;
        color: white;
    }
    to{
        background-color: #2B2B2B;
        color: white;
    }
`;

export default styled.button`
    border: 2px solid ${props => props.dark ? "#2B2B2B" : "white"};
    background-color: Transparent;
    padding: 25px 30px 25px 30px;
    color: ${props => props.dark ? "#2B2B2B" : "white"};
    font-family: 'Raleway', sans-serif;
    font-size: 0.9em;
    &:hover{
        animation: ${props => props.dark ? flipColor_dark : flipColor} .2s linear;
        animation-fill-mode: forwards;
    }
`
