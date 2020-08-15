import React, { useState, useEffect, useContext } from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import publeHeartIcon from '../../assets/images/icons/purple-heart.svg';
import powerof from '../../assets/images/Sair.png';

import api from '../../service/api';

import {
    Container,
    Header,
    HeaderContent,
    UserInfo,
    Content
} from './styles';

import { Link, useHistory } from 'react-router-dom';

import AuthContext from '../../contexts';

function Landing() {
    const [ totalConnections, setTotalConnections ] = useState(0);
    const { signed, signOut } = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        const storageToken = localStorage.getItem('@AuthProffy:token');

        if(!signed && !storageToken) {
            history.push('/')
        }
 
        const total = api.get('/connection').then(response => {
            setTotalConnections(response.data.total);
        });
    }, [history, signed]);

    function getOut () {
        signOut();
        history.push('/')
    }

    return (
        <Container>
            <Header>
                <HeaderContent>
                    
                    <div className="first-box">
                                        
                        <UserInfo>
                            <img  id="powerOf" src='https://avatars0.githubusercontent.com/u/17915601?s=60&v=4' alt="proffy"/>
                            <p>Dionathan de Córdova</p>
                        </UserInfo>

                        <button onClick={getOut} className="signout">
                            <img src={powerof} alt="signout"/>
                        </button>
                    </div>

                    <div className="second-box">
                        <div className="logo-container">
                            <img src={logoImg} alt="proffy"/>
                            <h2>Sua plataforma de estudos online.</h2>
                        </div>

                        <img src={landingImg} alt="landing" className="hero-image"/>
                    </div>
                </HeaderContent>
            </Header>
            
            <Content>

                <span className="welcome">
                    Seja bem-vindo. <br/>
                    <b>O que deseja fazer?</b>
                </span>

                <span className="total-connections">
                    Total de {totalConnections > 1 ? totalConnections + ' conexões ' : totalConnections + ' conexão' } já realizada(s) 
                    <img src={publeHeartIcon} alt="coração roxo"/>
                </span>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="estudar"/>Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="estudar"/>Dar aulas
                    </Link>
                </div>

              
            </Content>
        </Container>
    )
}

export default Landing;