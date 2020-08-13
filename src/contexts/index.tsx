import React, { createContext, useState, useEffect, useContext } from "react";
// import { AsyncStorage } from "react-native";
import api from "../service/api";
import { AxiosResponse } from "axios";

interface ResponseSignInUser {
    user: {
        id: string;
    },
    token: string;
}
interface AuthContextData {
    signed: boolean;
    user: Object | null;
    loading: boolean;
    signIn(
        email: string,
        password: string
    ): Promise<AxiosResponse<ResponseSignInUser>>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<Object | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStoregedData() {
            // const storegedUser = await AsyncStorage.getItem("@Auth:user");
            const storegedUser = await localStorage.getItem('@AuthProffy:user');
            const storageToken = await localStorage.getItem('@AuthProffy:token');

            if (storegedUser) {
                setUser(JSON.parse(storegedUser));
                setLoading(false);
            } else if (!storegedUser) {
                setLoading(false);
            }
        }

        loadStoregedData();
    }, []);

    async function signIn(email: string, password: string) {
        console.log({email, password})
        const response = await api.post<ResponseSignInUser>("authenticate", {
            email,
            password,
        });

        // if (response.data.user) {
        //     setUser(response.data.user);

        //     // await AsyncStorage.setItem("@Auth:user", JSON.stringify(response.data.user));
        //     await localStorage.setItem("@AuthProffy:user", JSON.stringify(response.data.user));
        //     await localStorage.setItem("@AuthProffy:token", JSON.stringify(response.data.user));
        // }
        return response;
    }

    async function signOut() {
        // await AsyncStorage.clear();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
// export function useAuth() {
//     const context = useContext(AuthContext);

//     return context;
// }