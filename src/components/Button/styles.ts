import styled from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
    disabled?: boolean;
    loading?: boolean;
}

export const Container = styled.button<ButtonProps>`
    background: ${(p: ButtonProps) => p.disabled ? '#DCDCE6' : '#04D361'};
    color : ${(p: ButtonProps) => p.disabled ? '##9C98A6' : '#FFFFFF'};

    margin-top: 2rem;
    width: 100%;
    border: 0;  
    font-weight: 700;
    padding: 1.2rem;
    border-radius: .8rem;

    transiction: background-color 0.2s;

	&:hover
		background: ${shade(0.2, '#04D361')};
	}
`