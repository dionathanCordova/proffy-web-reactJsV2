import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import ForgotPass from '../pages/ForgotPass';
import ResetPass from '../pages/ResetPassword';

import FinishRequest from '../pages/FinishRequest';

import { AuthProvider } from '../contexts';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
    <BrowserRouter>
        <AuthProvider>
            <Route path='/' exact component={Login} />
            <Route path='/sign-up' component={SignUp} />

            <Route path='/landing' component={Landing} />
            
            <Route path='/study' exact component={TeacherList} />
            <Route path='/give-classes' exact component={TeacherForm} />

            <Route path='/profile' component={Profile}/>

            <Route path='/forgot-password' exact component={ForgotPass} />
            <Route path='/reset-password/:token' exact component={ResetPass} />

            <Route path='/finish-request/' exact component={FinishRequest} />
        </AuthProvider>
    </BrowserRouter>
)

export default Routes;