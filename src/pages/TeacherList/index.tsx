import React, { useState, FormEvent, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher }   from '../../components/TeacherItem';

import './styles.css';
import Input from '../../components/Input';
import Select from '../../components/SelectInput';
import api from '../../service/api';

function TeacherList() {
    const [ subject, setSubject ] = useState('');
    const [ week_day, setWeekDay ] = useState('');
    const [ time, setTime ] = useState('');
    const [ teachers, setTeachers ] = useState([]);

    function searchTeachers(e: FormEvent) {
        e.preventDefault();

        api.get('classes', {
            params: {
                subject, week_day, time
            }
        }).then(response => {
            setTeachers(response.data);
        })
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os professores disponíveis.">
                <form action="" id="search-teachers" onSubmit={searchTeachers}>
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
                            {value: 'Quimica', label: 'Química'},
                            {value: 'Estatística', label: 'Estatística'}
                        ]}
                    />
                    <Select 
                        label="Dia da semana" 
                        name="week_day"
                        value={week_day}
                        onChange={e => setWeekDay(e.target.value)}
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
                        label="Hora" 
                        name="time" 
                        type="time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />

                    <button type="submit">Buscar</button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacherData={teacher}/>
                })}
            </main>
        </div>
    )
}

export default TeacherList;