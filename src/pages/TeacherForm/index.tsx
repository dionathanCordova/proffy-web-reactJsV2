import React, { useState, FormEvent, useContext, useEffect, useCallback, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/TextArea';
import Select from '../../components/SelectInput';

import warningIcon from '../../assets/images/icons/warning.svg';
import rocketIcon from '../../assets/images/icons/rocket.svg';
import emptyAvatar from '../../assets/images/emptyAvatar.png';

import { 
    PageTeacherForm,
    Main,
    Fieldset,
    Footer,
    CustomUpload,
    GroupGrid
} from './styles';

import api from '../../service/api';
import AuthContext from '../../contexts';

function TeacherForm() {
    const history = useHistory();

    const { signed, user, updateUser } = useContext(AuthContext);

    const [ name, setName ] = useState('');
    const [ avatar, setAvatar ] = useState('');
    const [ whatsapp, setWhatsapp ] = useState('');
    const [ bio, setBio ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ cost, setCost ] = useState('');

    const [ scheduleItems, setScheduleItems ] = useState( [
        {id: 0, week_day: 0, from: '', to: ''},
    ]);

    useEffect(() => {
        if(!signed) {
            history.push('/')
        }

        setAvatar(user.avatar !==  null ? user.avatar : emptyAvatar);
        setName(user.name);

    }, [avatar, history, signed, user]);

    function addNewSchedule() {
        let len = scheduleItems.length + 1;
        const newSchedule = {id: len, week_day: 0, from: '', to: ''};
        setScheduleItems([...scheduleItems,  newSchedule]);
    }

    function removeSchedule(index: number) {
        if(scheduleItems.length > 1) {
            setScheduleItems(scheduleItems.filter(sched => sched.id !== index));
        }
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

    const handleUploadAvatar = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) {
            const avatar = e.target.files[0];
            const formData = new FormData();
            formData.append('file', avatar);

            api.patch('uploadImages', formData, { headers: {userId : Number(user.id)}}).then(response => {
                const userUpdated = response.data.user[0];
                updateUser(userUpdated);
            })
        }
    }, [updateUser, user.id])

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
        <PageTeacherForm>
            <PageHeader route="Dar aula">
                <h1>Que demais que você quer dar aulas!</h1>
                <div className="group">
                    <p>O primeiro passo, é preencher esse formulário de inscrição.</p><br/>

                    <div id="welcomeMessage">
                        <img src={rocketIcon} alt="rocket"/> 
                        <p>Preparare-se! <br></br>vai ser o máximo.</p> 
                    </div>
                </div>
            </PageHeader>
            
            <Main>
                <form onSubmit={handleCreateClass}>
                <Fieldset>
                    <legend>Seus dados</legend>
                    
                    <GroupGrid>
                        <CustomUpload image={avatar}>
                            <label className="new-button" htmlFor="upload">
                                <p>{name}</p>
                            </label>
                            <input id="upload" type="file" onChange={handleUploadAvatar} /> 
                        </CustomUpload>

                        <Input 
                            label="Whatsapp" 
                            name="whatsapp" 
                            placeholder="( ) _ ____ ____" 
                            type="text"
                            value={whatsapp}
                            onChange={(e) => {setWhatsapp(e.target.value)}}
                        />
                    </GroupGrid>

                    <Textarea 
                        name="bio" 
                        label="Biografia"
                        value={bio}
                        onChange={(e) => {setBio(e.target.value)}}
                    />

                </Fieldset> 

                <Fieldset>
                    <legend>Sobre a aula</legend>

                    <GroupGrid>
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
                    </GroupGrid>

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

                                <button className="removeArea" type="button" onClick={() => removeSchedule(schedule.id)}>x</button>
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
            </Main>
        </PageTeacherForm>
    )
}

export default TeacherForm;