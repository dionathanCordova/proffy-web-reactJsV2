import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface TextareaHeader extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string; 
    name: string;
}

const Textarea: React.FC<TextareaHeader> = ({label, name, ...rest}) => {
    return(
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} { ...rest} />
        </div>
    )
}

export default Textarea;