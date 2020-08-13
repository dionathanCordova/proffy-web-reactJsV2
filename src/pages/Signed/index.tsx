import React from 'react';

import {
    Container,
    Content,
    Button,
} from './styles';

import { Link } from 'react-router-dom';

const Signed: React.FC = () => {

    function handleSubmit() {

    }

    return (
        <Container>
            <Content>
                <p>Agora você faz parte da plataforma da Proffy <br/> Tenha uma ótima experiência.</p>
                <Link to="/">Fazer login</Link>
            </Content>
        </Container>
    )
}

export default Signed