import React, { useState, useEffect, useContext, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
    Container,
    Header,
    Content,
    HeaderNavigation,
    HeaderContent,
    Footer,
    Fieldset
} from './styles';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import emptyAvatar from '../../assets/images/emptyAvatar.png';
import warningIcon from '../../assets/images/icons/warning.svg';

import AuthContext from '../../contexts';

import Input from '../../components/Input';
import Textarea from '../../components/TextArea';
import Select from '../../components/SelectInput';
import api from '../../service/api';
import { FiUserX } from 'react-icons/fi';

const Profile: React.FC = () => {
    const [ userName, setUsername ] = useState('');
    const [ userAvatar, setUserAvatar ] = useState('');

    const [ name, setName ] = useState('');
    const [ avatar, setAvatar ] = useState('');
    const [ whatsapp, setWhatsapp ] = useState('');
    const [ bio, setBio ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ cost, setCost ] = useState('');
    const [ surname, setSurname ] = useState('');
    const [ email, setEmail ] = useState('');

    const [ scheduleItems, setScheduleItems ] = useState( [
        {week_day: 0, from: '', to: ''},
    ]);

    const { signed, signOut, user } = useContext(AuthContext);

    const history = useHistory();

    useEffect(() => {
        const storageToken = localStorage.getItem('@AuthProffy:token');

        if(!signed && !storageToken) {
            history.push('/')
        }

        setUsername(user.name);
        setUserAvatar(user.avatar !== null ? user.avatar : emptyAvatar);

        console.log(user);
    }, [history, signed, user, userName]);


    function addNewSchedule() {
        const newSchedule = {week_day: 0, from: '', to: ''};
        setScheduleItems([...scheduleItems,  newSchedule]);
    }

    function setScheduleItemsValue(position: number, field: string, value: string ) {
        const updateSchedule = scheduleItems.map((schedule, index) => {
            if(index === position) {
                return { ...schedule, [field]: value};
            }

            return schedule;
        })

        setScheduleItems(updateSchedule)    
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(response => {
            console.log(response.data);
            alert('Cadastro efetuado com sucesso.');
            history.push('/');
        }).catch(erro => {
            alert('Erro ao cadastrar!' + erro);
        })
    }

    return (
        <Container>
            <Header>
                <HeaderNavigation>
                    <div className="group">
                        <Link to="/landing">
                            <img src={backIcon} alt="voltar"/>
                        </Link>

                        <p>Meu perfil</p>
                        <img src={logoImg} className="logo" alt="proffy"/>
                    </div>
                </HeaderNavigation>
                
                <HeaderContent>
                    <img id="userAvatar" src={userAvatar} alt="proffy"/>
                    <h2>Dionathan Cordova</h2>
                    <p>Química</p>
                </HeaderContent>
            </Header>

            <Content>
                <form onSubmit={handleCreateClass}>
                    <Fieldset>
                        <legend>Seus dados</legend>
                        <div  className="groupGrid">
                            <Input 
                                label="Nome" 
                                name="name" 
                                type="text"
                                value={name}
                                onChange={(e) => {setName(e.target.value)}}
                            />

                            <Input 
                                label="Sobrenome" 
                                name="surname" 
                                type="text"
                                value={surname}
                                onChange={(e) => {setSurname(e.target.value)}}
                            />

                            <Input 
                                label="E-mail" 
                                name="email" 
                                type="text"
                                value={email}
                                onChange={(e) => {setEmail(e.target.value)}}
                            />

                            <Input 
                                label="Whatsapp" 
                                name="whatsapp" 
                                type="text"
                                value={whatsapp}
                                onChange={(e) => {setWhatsapp(e.target.value)}}
                            />
                        </div>

                        <Textarea 
                            name="bio" 
                            label="Biografia"
                            value={bio}
                            onChange={(e) => {setBio(e.target.value)}}
                        />

                    </Fieldset> 

                    <Fieldset>
                        <legend>Sobre a aula</legend>

                        <div  className="groupGrid" >
                            <Select 
                                label="Matéria" 
                                name="subject"
                                value={subject}
                                onChange={(e) => {setSubject(e.target.value)}}
                                options={[
                                    {value: 'Artes', label: 'Artes'},
                                    {value: 'Biologia', label: 'Biologia'},
                                    {value: 'Matematica', label: 'Matematica'},
                                    {value: 'Física', label: 'Física'},
                                    {value: 'Química', label: 'Química'},
                                    {value: 'Estatística', label: 'Estatística'}
                                ]}
                            />

                            <Input
                                label="Custo da sua hora por aula" 
                                name="cost" 
                                placeholder="Valor em R$" 
                                type="text"
                                value={cost}
                                onChange={(e) => {setCost(e.target.value)}}
                            />
                        </div>

                    </Fieldset>

                    <Fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" id='add-horario' onClick={addNewSchedule}>+ Novo horário</button>
                        </legend>

                        {scheduleItems.map((schedule, index) => (
                            <div className="schedule-item" key={index}>
                                <div className="items">
                                    <Select 
                                        label="Dia da semana" 
                                        name="week_day"
                                        value={schedule.week_day}
                                        onChange={e => setScheduleItemsValue(index, 'week_day', e.target.value)}
                                        options={[
                                            {value: '0', label: 'Domingo'},
                                            {value: '1', label: 'Segunda-feira'},
                                            {value: '2', label: 'Terça-feira'},
                                            {value: '3', label: 'Quarta-feira'},
                                            {value: '4', label: 'Quinta-feira'},
                                            {value: '5', label: 'Sexta-feira'},
                                            {value: '6', label: 'Sabado'}
                                        ]}
                                    />

                                    <Input 
                                        name="from" 
                                        label="Das" 
                                        type="time"
                                        value={schedule.from}
                                        onChange={e => setScheduleItemsValue(index, 'from', e.target.value)}
                                    />

                                    <Input 
                                        name="to" 
                                        label="Até" 
                                        type="time"
                                        value={schedule.to}
                                        onChange={e => setScheduleItemsValue(index, 'to', e.target.value)}

                                    />

                                    <button className="removeArea">x</button>
                                </div>

                               

                            </div>
                        ))}

                        <Footer>
                            <div id="aviso">
                                <img src={warningIcon} alt="warning icon"/>
                                <p>
                                    <span> Importante! </span><br/>
                                    Preencha todos os dados
                                </p>
                            </div>

                            <button className="give-classes" type="submit">
                                Salvar cadastro
                            </button>
                        </Footer>
                    </Fieldset>
                </form>
            </Content>
        </Container>
    )
}

export default Profile;