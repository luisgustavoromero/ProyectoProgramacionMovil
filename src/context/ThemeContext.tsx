import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { Appearance } from "react-native";

type Theme = 'light'|'dark';

type ThemeContextType = {
    theme: Theme,
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null> (null)

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme debe ser utilizado dentro de ThemeProvider")
    return context;
}

export const ThemeProvider = ({children}: {children: React.ReactNode}) =>{
    const [theme, setTheme] = useState<Theme>('dark')

    const toggleTheme = () =>{
        const newTheme = theme ==='light' ? 'dark' : 'light'
        setTheme(newTheme)
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

