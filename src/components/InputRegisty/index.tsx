import React, { InputHTMLAttributes, useState } from 'react';
import { IconBaseProps } from 'react-icons';

import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error } from './styles';

interface InputHeader extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    containerStyle?: object;
    icon?: React.ComponentType<IconBaseProps>
    label: string;
    showValue?: boolean;
    type?: string;
    first?:boolean;
}

const Input: React.FC<InputHeader> = ({name, label, type, first, showValue, containerStyle = {}, icon: Icon, ...rest}) => {
    const [ inputType, setInpuType ] = useState(type)

    const [ show, setShow ] = useState(showValue);
    const [ iconColor, setIconCole ] = useState('#9C98A6');

    function changeType() {
        // setIconCole(show ? '#9C98A6' : '#8257E5')
        setShow(!show);
        setInpuType(show ? 'text' : 'password')
    }
    
    return(
        <Container style={containerStyle} >
            <input {...rest} type={inputType} placeholder={label} required/>
            <label>{label}</label>

            { Icon && <Icon size={20} color={iconColor} onClick={changeType} />}
        </Container>
    )
}

export default Input;




            {/* { error &
                <Error title={error}>
                    <FIAlertCircle color="#c53030" size={20}/>
                </Error>
            } */}