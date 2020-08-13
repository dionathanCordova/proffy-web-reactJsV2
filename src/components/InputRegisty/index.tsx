import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error } from './styles';

interface InputHeader extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    containerStyle?: object;
    icon?: React.ComponentType<IconBaseProps>
    label: string;
}

const Input: React.FC<InputHeader> = ({name, label, containerStyle = {}, icon: Icon, ...rest}) => {
    return(
        <Container style={containerStyle} >
            <input {...rest} required />
            <label>{label}</label>

            { Icon && <Icon size={20} />}

            {/* { error &
                <Error title={error}>
                    <FIAlertCircle color="#c53030" size={20}/>
                </Error>
            } */}

        </Container>
    )
}

export default Input;