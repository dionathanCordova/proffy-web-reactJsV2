import React, { createContext, useState, useEffect } from "react";
import api from "../service/api";
import { AxiosResponse } from "axios";

interface UserProps {
    id: string;
    name: string;
    avatar: string;
    email: string;
    bio: string;
    whatsapp: string;
}

interface ResponseSignInUser {
    user: UserProps;
    token: string;
    rememberMe: boolean;
    rememberPassword: string;
}

interface AuthContextData {
    signed: boolean;
    user: UserProps;
    loading: boolean;
    signIn(
        email: string,
        password: string,
        remember: boolean
    ): Promise<AxiosResponse<ResponseSignInUser>>;
    signOut(): void;
    remember: boolean;
    rememberPassword: string | null;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<UserProps>({} as UserProps);
    const [loading, setLoading] = useState(true);
    const [signed, setSigned] = useState(false);
    const [pass, setPass] = useState('');

    const [data, setData] = useState(() => {
        const storegedUser = localStorage.getItem('@AuthProffy:user');
        const storageToken = localStorage.getItem('@AuthProffy:token');
        const rememberMe = localStorage.getItem('@AuthProffy:remember');
        const rememberPassword = localStorage.getItem('@AuthProffy:password');

        if(storegedUser && storageToken) {
            return { user: JSON.parse(storegedUser), storageToken, rememberMe, rememberPassword};
        }

        return {} as ResponseSignInUser;
    })

    async function signIn(email: string, password: string, rememberMe: boolean) {
        const response = await api.post<ResponseSignInUser>("authenticate", {
            email,
            password,
        });

        if (response.data.user) {
            const user = response.data.user;
            const token = response.data.token;

            localStorage.setItem("@AuthProffy:user", JSON.stringify(user));
            localStorage.setItem("@AuthProffy:token", token);

            // if(rememberMe) {
            //     localStorage.setItem("@AuthProffy:remember", 'true');
            //     localStorage.setItem("@AuthProffy:password", JSON.stringify(password));
            // }else{
            //     localStorage.setItem("@AuthProffy:remember", 'false');
            //     localStorage.setItem("@AuthProffy:password", '');
            // }
            
            setUser(user);
            setSigned(true);
            setData({user, token, rememberMe, rememberPassword: password})
        }else{
            setSigned(false);
            setUser({} as UserProps);
            setData({} as ResponseSignInUser);
        }

        return response;
    }

    async function signOut() {
        // localStorage.clear();
        localStorage.removeItem("@AuthProffy:user");
        localStorage.removeItem("@AuthProffy:token");

        setUser({} as UserProps);
    }

    return (
        <AuthContext.Provider value={{ 
            signed: !!data.user, 
            user: data.user, 
            loading, 
            signIn, 
            signOut,
            remember: !!data.rememberMe,
            rememberPassword: data.rememberPassword
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
// export function useAuth() {
//     const context = useContext(AuthContext);
//     return context;
// }