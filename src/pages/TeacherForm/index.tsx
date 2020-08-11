import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/TextArea';
import Select from '../../components/SelectInput';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../../service/api';

function TeacherForm() {
    const history = useHistory();

    const [ name, setName ] = useState('');
    const [ avatar, setAvatar ] = useState('');
    const [ whatsapp, setWhatsapp ] = useState('');
    const [ bio, setBio ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ cost, setCost ] = useState('');

    const [ scheduleItems, setScheduleItems ] = useState( [
        {week_day: 0, from: '', to: ''},
    ]);

    function addNewSchedule() {
        console.log(scheduleItems);
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
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que demais que você quer dar aulas!"
                description="O primeiro passo, é preencher esse formulário de inscrição"
            />
            
            <main id="main">
                <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>Seus dados</legend>
                    
                    <Input 
                        label="Nome completo" 
                        name="name" 
                        type="text"
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                    />

                    <Input 
                        label="Link da sua foto" 
                        name="avatar" 
                        placeholder="Começa com http://" 
                        type="text"
                        value={avatar}
                        onChange={(e) => {setAvatar(e.target.value)}}
                    />

                    <Input 
                        label="Whatsapp" 
                        name="whatsapp" 
                        placeholder="Somente números" 
                        type="text"
                        value={whatsapp}
                        onChange={(e) => {setWhatsapp(e.target.value)}}
                    />

                    <Textarea 
                        name="bio" 
                        label="Biografia"
                        value={bio}
                        onChange={(e) => {setBio(e.target.value)}}
                    />

                </fieldset> 

                <fieldset>
                    <legend>Sobre a aula</legend>
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

                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" id='add-horario' onClick={addNewSchedule}>+ Novo horário</button>
                    </legend>

                    {scheduleItems.map((schedule, index) => (
                        <div className="schedule-item" key={index}>
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
                        </div>
                    ))}

                    <footer id="buttons-container">
                        <p>
                            <img src={warningIcon} alt="warning icon"/>
                            Importante! <br/>
                            Preencha todos os dados
                        </p>

                        <button className="give-classes" type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </fieldset>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;