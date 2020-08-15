import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputHeader extends InputHTMLAttributes<HTMLInputElement> {
    label?: string; 
    name: string;
}

const Input: React.FC<InputHeader> = ({label, type, name, ...rest}) => {
    return(
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} { ...rest} placeholder={type}/>
        </div>
    )
}

export default Input;