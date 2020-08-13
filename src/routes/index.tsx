import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';
import ContextExample from '../pages/ContextExample';
import SignIn from '../pages/SignIn';
import Signed from '../pages/Signed';

import { AuthProvider } from '../contexts';

const Routes: React.FC = () => (
    <BrowserRouter>
        <AuthProvider>
            <Route path='/' exact component={Landing} />
            <Route path='/study' exact component={TeacherList} />
            <Route path='/sign-in' component={SignIn} />
            <Route path='/signed' component={Signed} />
            <Route path='/context' exact component={ContextExample} />
            <Route path='/give-classes' exact component={TeacherForm} />
        </AuthProvider>
    </BrowserRouter>
)

export default Routes;