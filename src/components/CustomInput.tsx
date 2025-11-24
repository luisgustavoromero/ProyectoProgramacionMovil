import { Button,KeyboardTypeOptions,StyleSheet,Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import {MaterialIcons, Ionicons} from "@expo/vector-icons";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

type Props = {
    required? : boolean;
    type?: 'text' | 'email' | 'password' | 'number';
    value: string;
    placeholder : string;
    onChange: (text: string) => void;
}

export default function CustomInput ({type = "text", required, value, placeholder, onChange}: Props){
    const {theme, toggleTheme} = useTheme()
    const [isSecureText, setIsSecureText] = useState(type === "password");
    const isPasswordField = type === 'password';
   
    const icon = type === 'email' ? 'email' : 
                    type === 'password' ? 'lock' : ''

    const keyboardType: KeyboardTypeOptions = 
        type==='email'? 'email-address' : 
        type === 'number' ? 'numeric' :
        'default';

        //funcion para calcular errores de validacion
        //output: string
    const getError = () => {
        if (type === 'email' && !value.includes('@')) return 'Correo invalido';
        if (type === 'password' && value.length < 6) return 'La contraseña debe ser mas fuerte';
        // validar campos obligatorios
    }
    const error = getError();
    const themed = styles(theme);    
    return(
        //wrapper
        <View style={themed.wrapper}>
            {/* //inputContainer */}
            <View style={[themed.inputContainer, error && themed.inputError]}>
                <MaterialIcons name={icon as any } size={20} color="#111417" />
                <TextInput 
                 placeholder={placeholder}
                 placeholderTextColor="#111417"
                 value={value} 
                 onChangeText={onChange}
                 onBlur={()=>{}}
                 secureTextEntry={isSecureText}
                 style={themed.input}
                 />
                
              { isPasswordField && <TouchableOpacity 
                    onPress={
                        ()=>{
                            setIsSecureText(!isSecureText);
                        }
                    }
                > 
                    <Ionicons name={isSecureText ? 'eye' : 'eye-off'} size={22} color="#111417"/>
                </TouchableOpacity>}
            </View>
            { error && <Text style={themed.inputError}> {error} </Text>}
        </View>
    );
}

const styles =(theme: string)=> StyleSheet.create({
   wrapper:{
        marginBottom: 10,
        width:'90%',
        height:60,
        marginVertical:10,
   },
    inputContainer: {
        //distribucion de componentes
        flexDirection: 'row',
        alignItems: 'center',
        //estilizacion de input
        borderWidth: 1,
        borderColor:'#debb89',
        borderRadius: 10, 
        paddingHorizontal: 13,
        backgroundColor:'#debb89',
    },
    input:{
        //agregando espacio al componente input nativo
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        width: '80%',
        color: '#111417'
    },
    inputError: {
        borderColor: '#debb89',
        color: '#debb89'
    }
})