import React, { useState, FormEvent, useEffect } from 'react';
import Input from '../../components/InputRegisty';
import { FiEye } from 'react-icons/fi';

import backIcon from '../../assets/images/icons/back.svg';
import api from '../../service/api';

import {
    Container,
    Content,
    AnimationContainer,
    Button,
    BackgroundFull,
    BackgroundMini
} from './styles';

import { Link, useHistory,  RouteComponentProps, withRouter, Redirect } from 'react-router-dom';
import * as H from "history";

type TokenParams = {
    params: {
        token: string;
    };
};

interface RouteProps {
    match: TokenParams;
    location: H.Location;
    history: H.History;
    staticContext?: any;
}

const ResetPassword: React.FC<RouteProps> = ({match}: RouteProps) => {
    const [token, setToken] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();

    useEffect(() => {
        const token = match.params.token; 
        setToken(token);
    }, [match]);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if(password === confirm_password) {
            try {
                const response = await api.post('reset_password', {
                    token,
                    password
                });
    
                console.log(response);
    
                if(response.data.status === 'ok') {
                    console.log('ok');
                    history.push('/finish-request', { title: 'Redefinição de senha!', content: 'Boa, agora é só logar novamente com sua nova senha. aproveitar os estudos.'});
                }else{
                    alert('Ocorreu err ');
                }
            } catch (error) {
                alert('Ocorreu um erro ' + error);
            }
            

        }else{
            alert('Dados incorretos');
            setError('Dados incorretos');
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
                        <h1>Redefinição de senha</h1>
                        <p>Preencha os dados abaixo</p>

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

export default ResetPassword;