import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import SignInBackgroundImg from '../../assets/images/Proffy.svg';

export const Container = styled.div`
	height: 100vh;
	width: 100%;

	display: flex;
	align-items: stretch;

	@media(max-width: 800px) {
		flex-direction: column;
		position: relative;
		justify-content: center;
		text-align: center;
	}

`
export const Content = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	
	justify-content: center;
	width: 100%;
	max-width: 50%;

	@media(max-width: 800px) {
		width: 100%;
		max-width: 100%;
		margin-top: 4rem;
		margin-bottom: 4rem;
	}
`
const appearFromRight = keyframes`
	from{
		opacity:0;
		transform: translateX(50px);
	}
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
			font-size: 2rem;
			color: #32264D
		}

		svg {
            color: #9C98A6;
        }
	}
`
export const Button = styled.button`
	margin-top: 0.5rem;
	width: 100%;
	background: var(--color-secundary);
	color: var(--color-title-in-primary);
	font-weight: 700;
	padding: 1.2rem;
	border-radius: .8rem;
	border: 0;
	transiction: background-color 0.2s;

	&:hover{
		background: var(--color-secundary-dark):
		color:  var(--color-secundary-dark):
	}
`

export const PassInfo = styled.div`
	display: flex;
	font-size: 1.2rem;
	color: var(--color-text-complement);
	padding-top: 2rem;
	padding-bottom: 2rem;

	.container {
		width: 40%;
		display: block;
		position: relative;
		padding-left: 35px;
		margin-bottom: 12px;
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		padding-top: 0.5rem;

		input {
			position: absolute;
			opacity: 0;
			cursor: pointer;
			height: 0;
			width: 0;
		}

		.checkmark {
			position: absolute;
			top: 0;
			left: 0;
			height: 25px;
			width: 25px;
			background-color: #FFF;
			border-radius: 8px;
		}
	}

	.container:hover input ~ .checkmark {
		background-color: #FFF;
	}

	.container input:checked ~ .checkmark {
		background: var(--color-secundary);
	}
	  
	.checkmark:after {
		content: "";
		position: absolute;
		display: none;
	}
	  
	.container input:checked ~ .checkmark:after {
		display: block;
	}
	  
	.container .checkmark:after {
		left: 9px;
		top: 5px;
		width: 5px;
		height: 10px;
		border: solid white;
		border-width: 0 3px 3px 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
	}

	a {
		margin-left: auto;
		padding-top: 0.8rem;
		font-size: 1.2rem;
		color: var(--color-text-complement);
		text-decoration: none;
		transition: -webkit-filter .2s;
		transition: filter .2s;
		transition: filter .2s,-webkit-filter .2s;
	}
`

export const FooterInfo = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;

	p {
		margin-top: 5rem;
		font-size: 1.6rem;
		color: var(--color-text-base);

		& + p {
			font-size: 1.3rem;
			color: var(--color-text-complement);
		}

		a{
			font-weight: 700;
			text-decoration: none;
			color: var(--color-primary);
		}
	}
`

export const Background = styled.div`
	flex: 1;
	background: url(${SignInBackgroundImg}) no-repeat center;
	background-size: cover;
`
