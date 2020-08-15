import React, { useState, FormEvent } from 'react';
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
import api from '../../service/api';

const SignUp: React.FC = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if(password === confirm_password) {
            const user = await api.post('/users', {
                name,
                surname,
                email,
                password,
                confirm_password
            });
    
            console.log(user);
            history.push('signed')
        }else{
            setError('Dados incorretos')
        }
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
                            containerStyle={{borderRadius: '0.8rem 0.8rem 0 0'}}
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

                        <Input
                            label='Confirme a Senha'
                            icon={FiEye}
                            name="confirm_password"
                            type="password"
                            value={confirm_password}
                            containerStyle={{borderRadius: '0 0 0.8rem 0.8rem'}}
                            onChange={(e) => { setConfirmPassword(e.target.value) }}
                        />

                        {error !== '' ? error : ''}
                        <Button type="submit">Logar</Button>
                    </form>

                </AnimationContainer>
            </Content>
            
            <BackgroundFull />
        </Container>
    )
}

export default SignUp;