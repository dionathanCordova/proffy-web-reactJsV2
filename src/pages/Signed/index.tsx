import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import AuthContext from '../../contexts';

import {
    Container,
    Content,
} from './styles';

const Signed: React.FC = () => {
    const { signed } = useContext(AuthContext);
    const history = useHistory();

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