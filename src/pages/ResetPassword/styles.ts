import styled, { keyframes } from 'styled-components';

import SignInBackgroundImg from '../../assets/images/Proffy.svg';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: stretch;

    a{
        align-items: center;
    }

    @media(max-width: 800px) {
		flex-direction: column;
		position: relative;
		justify-content: center;
        text-align: center;
        height: 80rem;
	}

`
export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;

    justify-content: center;
	width: 100%;
    max-width: 50%;
    
    a{
        margin-right:auto;
        margin-top: -20rem;
        margin-bottom: 20rem;
    }


    @media(max-width: 800px) {
		width: 100%;
		max-width: 100%;
		margin-top: 4rem;
        margin-bottom: 4rem;

        a{
            display:none;
        }
	}
`

const appearFromRight = keyframes`
    from{
        opacity: 0;
        transform: translateX(50px);
    },
    to{
        opacity: 1;
        transform: translateX(0);
    }
`
export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    animation: ${appearFromRight} 1s;

    form{
		width: 340px;
		
		h1{
            margin-bottom: 24px;
            color: #32264D
        }
        
        p{
            margin-bottom: 4rem;
            max-width: 25rem;
        }

        svg {
            color: #9C98A6;
        }
	}

`
export const Button = styled.button`
    width: 100%;
    margin-top: 4rem;
    background: var(--color-secundary);
    color: var(--color-title-in-primary);
    border: 0;
    font-weight: 700;
    padding: 1.2rem;
    border-radius: .8rem;

    transiction: background-color 0.2s;

	:hover{
		background: var(--color-secundary-dark):
		color:  var(--color-secundary-dark):
	}
`

export const BackgroundFull = styled.div`
	flex: 1;
	background: url(${SignInBackgroundImg}) no-repeat center;
    background-size: cover;

    @media(max-width: 800px) {
        display: none;
	}
`

export const BackgroundMini = styled.div`
	flex: 1;
	background: url(${SignInBackgroundImg}) no-repeat center;
    background-size: cover;
    display: none;

    @media(max-width: 800px) {
        display: inline;
        height: 100rem;
	}
`