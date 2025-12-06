import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButtom from "../components/CustomButton";
import { useTheme } from "../context/ThemeContext";


export default function RegisterScreen ({navigation}: any){
    const {theme, toggleTheme} = useTheme()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleRegister = async () => {
        if(!email || !password) {
            Alert.alert("Error", "Debe ingresar correo y contraseña para registrarse")
            return;
        }
    }

    const themed = styles(theme)
    return(
        <View style ={themed.container}>
            <Text style={themed.title}>Crear cuenta</Text>
            <CustomInput type="email"
            value={email} 
            placeholder={"Correo electrónico"} 
            onChange={setEmail} />

            <CustomInput type="password"
            value={password} 
            placeholder={"Contraseña"} 
            onChange={setPassword} />
            
            <CustomButtom title={"Registrarse"} onPress={handleRegister} />

            <CustomButtom title={"¿Ya tienes cuenta? Inicia sesión"} variant='boton2' onPress={()=>navigation.goBack()} />
        </View>
    )
}

const styles = (theme: string) => StyleSheet.create({
    container:{
        width: '100%',
        height:'100%',
        backgroundColor: theme === 'dark' ? '#111417' : '#fefcf4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        color: theme === 'light' ? '#111417' : '#fefcf4',
        fontSize: 30,
        fontWeight:'bold',
        marginBottom: 15, 
        
    },
})