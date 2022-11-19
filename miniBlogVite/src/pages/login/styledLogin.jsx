import styled from "styled-components";

export const Logins = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 100px;

    form, label{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input{
        width: 400px;
        height: 35px;
        padding-left: 10px;
        border: 1px solid #dadada;
        margin: 10px;
        border-radius: 10px;
        background-color: ${({theme}) =>{
            return theme.colors.backgroundInput
        }};
        :focus{
            outline: none;
        }
        ::placeholder{
            color: ${({theme}) =>{
            return theme.colors.dark
        }};
        }  
    }
    .button{
        width: 200px;
        cursor: pointer;
        background-color: ${({theme}) =>{
        return theme.colors.primary
    }};
        color: white;
        :hover{
            background-color: ${({theme}) =>{
                return theme.colors.darkPrimary
            }};
        }
        }
    .error{
        color: #5C2D2A;
        background-color: #E8736B;
        padding: 20px;
        border-radius: 10px;
        font-weight: 600;
    }
    #disable{
        background-color: gray;
    }
`