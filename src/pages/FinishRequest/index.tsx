import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
    Container,
    Content,
} from './styles';

interface finish {
    title: string;
    content: string;
}

const FinishRequest: React.FC= () => {
    const location = useLocation<finish>()

    return (
        <Container>
            <Content>
                <h3>{location.state?.title}</h3>
                <p>{location.state?.content}</p>

                <Link to="/">Voltar ao login</Link>
            </Content>
        </Container>
    )
}

export default FinishRequest