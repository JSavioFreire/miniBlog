import styled from "styled-components";

export const Footers = styled.footer`
    background-color: ${({theme}) =>{
        return theme.colors.dark
    }};
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        color: ${({theme}) =>{
            return theme.colors.lightWrite
        }};
    }
`