import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${({theme}) =>{
            return theme.fonts.primary
        }} ;
        color: ${({theme}) =>{
            return theme.colors.dark
        }};
        background-color: ${({theme}) =>{
            return theme.colors.background
        }};
    }
    
    
`

export const theme = {
    colors:{
      primary: '#4EDB86',
      darkPrimary: '#389C60',
      background: '#ffffff',
      backgroundInput:'#f9f9f9',
      dark:'#333333',
      lightWrite:'#dadada'
      
    },
    fonts:{
      primary:"'Manrope', sans-serif;"
      
    }
  }