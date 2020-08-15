/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, FormEvent, useCallback } from 'react';
import { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiEye } from 'react-icons/fi';

import AuthContext from '../../contexts';

import Input from '../../components/InputRegisty';
import InputChech from '../../components/Input';
import Button from '../../components/Button';

import publeHeartIcon from '../../assets/images/icons/purple-heart.svg';

import { 
    Container, 
    Content, 
    AnimationContainer, 
    Background,
    PassInfo,
    FooterInfo,
} from './styles';

const Login: React.FC = () => {
    const [ userEmail, setEmail ] = useState('');
    const [ userPassword, setPassword ] = useState('');
    const [ rememberMe, setRememberMe] = useState(false);
    const [ disabled, setDisabled ] = useState(true);
    const [ togglePass, setTogglePass ] = useState(false); 

    const { signIn, signed, signOut, remember, user, rememberPassword } = useContext(AuthContext);
    const history = useHistory();

    function handleRememberMe() {
        setRememberMe(!rememberMe);
    }

    useEffect(() => {
        // if(user) {
        //     const { email } = user;
        //     if(email && remember && rememberPassword) {
        //         console.log('tes');
        //         setEmail(user.email);
        //         setPassword(rememberPassword.replace(/\"/g, ''));
        //         setRememberMe(true);
        //         setDisabled(false);
        //     }
        // }

        if(userEmail && userPassword) {
            setDisabled(false);
        }else{
            setDisabled(true);
        }

        signIn(userEmail, userPassword, rememberMe);

    }, [userEmail, userPassword]);


    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if(signed) {
            history.push('landing');
        }else{
            alert('Credenciais incorretas');
        }
    }

    function handleTogglePass() {
        setTogglePass(!togglePass);
    }

    return (
        <Container>
            
            <Background />
			
            <Content>
                <AnimationContainer>
                    <form action="" onSubmit={handleSubmit}>
                        <h1>Fazer login</h1>

                        <Input 
                            label='Email'
                            name="email" 
                            type="email"
                            showValue={true}
                            value={userEmail}
                            containerStyle={{borderRadius: '0.8rem 0.8rem 0 0'}}
                            onChange={(e) => {setEmail(e.target.value)}}
                        />

                        <Input 
                            label='Senha'
                            icon={FiEye} 
                            type="password"
                            name="password" 
                            showValue={false}
                            value={userPassword}
                            containerStyle={{borderRadius: '0 0 0.8rem 0.8rem'}}
                            onChange={(e) => {setPassword(e.target.value)}}
                        />

                        <PassInfo>
                            <label className="container">Lembrar-me
                                <input type="checkbox" checked={rememberMe} onChange={handleRememberMe} onClick={handleRememberMe} />
                                <span className="checkmark"></span> 
                            </label>
                            <Link to="forgot-password">Esqueci minha senha</Link>
                        </PassInfo>
                       
                        <Button disabled={disabled} type="submit">Entrar</Button>

                    </form>

                    <FooterInfo>
                        <p> 
                            Não tem conta? <br/>
                            <Link to="/sign-up">Cadastre-se </Link>
                        </p>

                        <p>
                            É de graça
                            <span> <img src={publeHeartIcon} alt="coração roxo"/></span>
                        </p>
                    </FooterInfo>
                </AnimationContainer>
            </Content>
        </Container>
    )
}


export default Login;