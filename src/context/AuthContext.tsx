//Pendiente de implentar en caso de usar AuthContext
import React, {createContext, useContext, useEffect, useState} from 'react'
import { supabase } from '../services/supabaseClient'
import { Alert } from 'react-native';

type User = {
    id: string,
    email: string,
    token: string
} | null

type AuthContextType = {
    user : User | null,
    isAllowed: boolean,
    login: (email:string, password: string) => Promise<void>,
    register: (email: string, password: string) =>Promise<void>
    logout: () => void,
}

const AuthContext = createContext<AuthContextType|null>(null)

export const useAuth = () => {
    const context =useContext(AuthContext);
    if(!context) throw new Error('useAuth debe usarse dentro de Authprovider')
    return context
}

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<User>(null)
    const [isAllowed, setIsAllowed] = useState<boolean>(false)

    const register = async (email: string, password: string) => {
        
    }

    const login = async (email: string, password: string) =>{

    }

    const logout = async () =>{
        
    }

    return(
        <AuthContext.Provider value={{user, isAllowed, login, logout, register}}></AuthContext.Provider>
    )
}