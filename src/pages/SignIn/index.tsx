import React, { useState } from 'react';
import Input from '../../components/InputRegisty';
import { FiEye } from 'react-icons/fi';

import backIcon from '../../assets/images/icons/back.svg';

import {
    Container,
    Content,
    AnimationContainer,
    Button,
    BackgroundFull,
    BackgroundMini
} from './styles';
import { Link, useHistory } from 'react-router-dom';

const SignIn: React.FC = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    function handleSubmit() {
        history.push('signed')
    }

    return (
        <Container>

            <BackgroundMini />

            <Content>
                <AnimationContainer>

                    <Link to="/">
                        <img src={backIcon} alt="voltar" />
                    </Link>

                    <form action="" onSubmit={handleSubmit}>
                        <h1>Cadastro</h1>
                        <p>Preencha os dados abaixo para começar</p>

                        <Input
                            label='Nome'
                            name="name"
                            type="text"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />

                        <Input
                            label='Sobrenome'
                            name="surname"
                            type="text"
                            value={surname}
                            onChange={(e) => { setSurname(e.target.value) }}
                        />

                        <Input
                            label='E-mail'
                            name="email"
                            type="text"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />

                        <Input
                            label='Senha'
                            icon={FiEye}
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />

                        <Button type="submit">Logar</Button>
                    </form>

                </AnimationContainer>
            </Content>
            
            <BackgroundFull />
        </Container>
    )
}

export default SignIn