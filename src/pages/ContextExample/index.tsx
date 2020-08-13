import React, { useEffect, useState, FormEvent } from 'react';
import { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiEye } from 'react-icons/fi';

import AuthContext from '../../contexts';
import Input from '../../components/InputRegisty';

import publeHeartIcon from '../../assets/images/icons/purple-heart.svg';

import { 
    Container, 
    Content, 
    AnimationContainer, 
    Background,
    PassInfo,
    FooterInfo,
    Button
} from './styles';

const ContextExample: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const { signIn, signed, signOut } = useContext(AuthContext);
    const history = useHistory();

    function handleCheck() {
        setIsChecked(!isChecked);
    }

    useEffect(() => {
        // if(!signed) {
        //     history.push('/')
        // }
      
    }, [history, signed]);

    function handleSignIn() {
        signOut();
    };

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        signIn(email, password)
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
                            type="text"
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                        />

                        <Input 
                            label='Senha'
                            icon={FiEye} 
                            name="password" 
                            type="password"
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}
                        />

                        <PassInfo>
                            <label className="container">Lembrar-me
                                <input type="checkbox" onClick={handleCheck} />
                                <span className="checkmark" defaultChecked={isChecked}></span> 
                            </label>
                            <a href="">Esqueci minha senha</a>
                        </PassInfo>
                       
                        <Button onClick={handleSignIn} type="submit">Logar</Button>
                    </form>

                    <FooterInfo>
                        <p> 
                            Não tem conta? <br/>
                            <Link to="/sign-in">Cadastre-se </Link>
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


export default ContextExample;