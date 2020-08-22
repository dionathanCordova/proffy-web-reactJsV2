import React, { useState, useEffect, useContext, useCallback } from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import publeHeartIcon from '../../assets/images/icons/purple-heart.svg';
import powerof from '../../assets/images/Sair.png';

import emptyAvatar from '../../assets/images/emptyAvatar.png';

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
    const { signed, signOut, user } = useContext(AuthContext);

    const [ userName, setUsername ] = useState('');
    const [ userAvatar, setUserAvatar ] = useState('');
    
    const history = useHistory();

    useEffect(() => {
        const storageToken = localStorage.getItem('@AuthProffy:token');

        if(!signed && !storageToken) {
            history.push('/')
        }
 
        const total = api.get('/connection').then(response => {
            setTotalConnections(response.data.total);
        });

        setUsername(user.name);
        setUserAvatar(user.avatar !== null ? user.avatar : emptyAvatar);

        console.log(user);
    }, [history, signed, user, userName]);

    const getOut = useCallback(() => {
        history.push('/');
        signOut();
    }, [history, signOut])

    return (
        <Container>
            <Header>
                <HeaderContent image={userAvatar}>
                    
                    <div className="first-box">
                                        
                        <Link to="profile">
                            <UserInfo>
                                <div id="userAvatar"></div>
                                <p>{userName}</p>
                            </UserInfo>
                        </Link>

                        <button onClick={getOut} className="signout">
                            <img src={powerof} alt="signout"/>
                        </button>
                    </div>

                    <div className="second-box">
                        <div className="logo-container">
                            <img src={logoImg} alt="proffy"/>
                            <h2>Sua plataforma de estudos online.</h2>
                        </div>

                        <img src={landingImg} alt="landing" className="proffy-image"/>
                    </div>
                </HeaderContent>
            </Header>
            
            <Content>

                <div className="text-container">
                    <span className="welcome">
                        Seja bem-vindo. <br/>
                        <b>O que deseja fazer?</b>
                    </span>

                    <span className="total-connections">
                        Total de {totalConnections > 1 ? totalConnections + ' conexões ' : totalConnections + ' conexão' } já realizada(s) 
                        <img src={publeHeartIcon} alt="coração roxo"/>
                    </span>
                </div>

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