import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Signed from '../pages/Signed';
import ForgotPass from '../pages/ForgotPass';

import { AuthProvider } from '../contexts';

const Routes: React.FC = () => (
    <BrowserRouter>
        <AuthProvider>
            <Route path='/' exact component={Login} />
            <Route path='/landing' component={Landing} />
            <Route path='/study' exact component={TeacherList} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/signed' component={Signed} />
            <Route path='/give-classes' exact component={TeacherForm} />
            <Route path='/forgot-password' component={ForgotPass} />
        </AuthProvider>
    </BrowserRouter>
)

export default Routes;