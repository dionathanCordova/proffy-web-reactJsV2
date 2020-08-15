import React, { useState, FormEvent } from 'react';
import Input from '../../components/InputRegisty';
import { FiMail } from 'react-icons/fi';

import backIcon from '../../assets/images/icons/back.svg';
import Button from '../../components/Button';

import {
    Container,
    Content,
    AnimationContainer,
    BackgroundFull,
    BackgroundMini
} from './styles';

import { Link, useHistory } from 'react-router-dom';

const ForgotPass: React.FC = () => {
    const [ email, setEmail ] = useState('');
    const [ disabled, setDisabled] = useState(true);

    const history = useHistory();

    function handleSubmit() {
        history.push('/')
    }

    function handleAlterEmail(event: React.ChangeEvent<HTMLInputElement>) {
        const val = event.target.value;
        setEmail(val); 
        if(val !== '') {
            setDisabled(false);
        }else{
            setDisabled(true);
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
                        <h1>Eita, esqueceu sua senha?</h1>
                        <p>Não esquenta, vamos dar um jeito nisso.</p>

                        <Input
                            label='E-mail'
                            name="email"
                            type="text"
                            icon={FiMail}
                            value={email}
                            onChange={(e) => {handleAlterEmail(e)}}
                        />

                        <Button disabled={disabled} type="submit">Enviar</Button>
                    </form>

                </AnimationContainer>
            </Content>
            
            <BackgroundFull />
        </Container>
    )
}

export default ForgotPass