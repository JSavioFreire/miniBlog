import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${({theme}) =>{
        return theme.colors.backgroundInput
    }};
    h1{
        font-weight: 400;
    }
    a{
        text-decoration: none;
        color: ${({theme}) =>{
            return theme.colors.dark
        }};
    }
    li{
        list-style: none;
    }
    ul{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        padding: 0 20px;
        width: 400px;   
    }
    .active{
        background-color: ${({theme}) =>{
            return theme.colors.primary
        }};
        border-radius: 5px;
        padding: 5px;
        color: white;
        
    }
`