import styled from 'styled-components';

import finishRequest from '../../assets/images/finishRequest.svg';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: stretch;

    a{
        align-items: center;
    }

    background: url(${finishRequest}) no-repeat center;
	background-size: cover;
`
export const Content = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;

    flex-direction: column;

    width: 100%;

    h3 {
        color: #FFFFFF;
        font-family: Archivo;
        font-style: normal;
        font-weight: bold;
        font-size: 54px;
        margin-top: 15rem;
    }
    
    p{
        margin-top: 2rem;
        color:  var(--color-title-in-primary);
        text-align: center;
    }
    
    a{
        background: var(--color-secundary);
        color: var(--color-title-in-primary);
        text-decoration: none;
        margin-top: 6rem;
        border: 0;
        font-weight: 700;
        width: 20rem;
        padding: 2rem;
        border-radius: .8rem;
        text-align: center;

        transiction: background-color 0.2s;

        :hover{
            background: var(--color-secundary-dark):
            color:  var(--color-secundary-dark):
        }
    }

`

export const Button = styled.button`

	
`
