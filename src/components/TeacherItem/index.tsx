import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../service/api';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
};

interface TeacherResponse {
    teacherData: Teacher
}

const TeacherItem: React.FC<TeacherResponse> = ({teacherData})  => {
    const formatWhatsapp = teacherData.whatsapp.replace(/ /g,'');

    function createConnection() {
        api.post('connection', {
            user_id: teacherData.id
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacherData.avatar} alt={teacherData.name}/>
                <div>
                    <strong>{teacherData.name}</strong>
                    <span>{teacherData.subject}</span>
                </div>
            </header>

            <p>
                {teacherData.bio}
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {teacherData.cost}</strong>
                </p>

                <a href={`https://wa.me/${formatWhatsapp}`} target="_blank">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem;