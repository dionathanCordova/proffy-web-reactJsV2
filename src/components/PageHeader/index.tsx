import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import {
    PageHeaderComp,
    HeaderContent,
    HeaderNavigation,
    Content
} from './styles';

interface Propriedades {
    title?: string;
    description?: string;
    route: string;
}

const PageHeader: React.FC<Propriedades> = (props) => {
    
    return (
        <PageHeaderComp>
            <HeaderNavigation>
                <div className="top-bar-container">
                    <Link to="/landing">
                        <img src={backIcon} alt="voltar"/>
                    </Link>
                    
                    <p>{props.route}</p>

                    <img src={logoImg} alt="proffy"/>
                </div>
            </HeaderNavigation>

            <HeaderContent>
                <Content>
                    {props.children}
                </Content>                
            </HeaderContent>
        </PageHeaderComp>
    )
}

export default PageHeader;