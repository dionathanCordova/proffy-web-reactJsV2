import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface Propriedades {
    title: string;
    description?: string;
}

const PageHeader: React.FC<Propriedades> = (props) => {
    
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/landing">
                    <img src={backIcon} alt="voltar"/>
                </Link>
                <img src={logoImg} alt="proffy"/>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {props.description && <p>{props.description}</p>}

                {props.children}
            </div>
        </header>
    )
}

export default PageHeader;