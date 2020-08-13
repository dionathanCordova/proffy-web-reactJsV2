import React, { useState, useEffect, useContext } from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import publeHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../service/api';

import './styles.css';
import { Link, useHistory } from 'react-router-dom';

import AuthContext from '../../contexts';

function Landing() {
    const [ totalConnections, setTotalConnections ] = useState(0);
    const {signed} = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        // if(!signed) {
        //     history.push('/')
        // }

        const total = api.get('/connection').then(response => {
            setTotalConnections(response.data.total);
        });
    }, [history, signed]);

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="landing" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="estudar"/>Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="estudar"/>Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnections > 1 ? totalConnections + ' conexões ' : totalConnections + ' conexão' } já realizada(s)
                    <img src={publeHeartIcon} alt="coração roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;