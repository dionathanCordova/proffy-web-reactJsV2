import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    disabled?: boolean;
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({children, disabled, loading,...rest}) => {
    return(
        <Container {...rest} disabled={disabled}>
            {loading ? 'Carregando' : children}
        </Container>
    )
}

export default Button;