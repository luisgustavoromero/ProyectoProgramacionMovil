import { useState } from "react"
import { View, Text, Alert, StyleSheet } from "react-native"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { setClientProfile } from "../store/clientSlice";
import CustomInput from "../components/CustomInput";
import CustomButtom from "../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "../context/ThemeContext";
import { accountsDB } from "../../assets/data/accountsDB";

export default function ProfileScreen ({navigation}: any){
    const {theme, toggleTheme} = useTheme()
    const dispatch = useAppDispatch();
    const savedProfile = useAppSelector((state)=>state.client)

    const [clientName, setClientName] = useState(savedProfile.name)
    const [email, setEmail] = useState(savedProfile.email)
    const [password, setPassword] = useState(savedProfile.password)
    const [favorite, setFavorite] = useState(savedProfile.favorite)
    const [comments, setComments] = useState(savedProfile.comments)
    

    const handleSave = () => {
        if(!clientName || !email || !password || !favorite || !comments) {
            Alert.alert(
                "Por favor ingrese todo los campos."

            )
            return;
        }
        const newUser ={
            name: clientName,
            email: email.toLowerCase(),
            password: password,
            favorite: favorite,
            comments: comments,
        }

        dispatch(
            setClientProfile(newUser)
        )
        try{

            accountsDB.push(newUser)

            Alert.alert('Perfil actualizado',
            "Se han ingresado tus comidas preferidas,")
        }catch(error){
            Alert.alert("Error al guardar.")
        }
        
    }
    const themed = styles(theme)
    return(
        <View style={themed.container}>
            <Text style={themed.title}>Modificar biografía</Text>
            <Text style={themed.text}>Nombre:</Text>
            <CustomInput value={clientName} placeholder={"Ingrese su nombre"} onChange={setClientName} />
            <Text style={themed.text}>Platillos favoritos:</Text>
            <CustomInput value={favorite} placeholder={"Ingrese su categoría preferida"} onChange={setFavorite} />
            <Text style={themed.text}>Descripcion:</Text>
            <CustomInput value={comments} placeholder={"Ingrese sus preferencias"} onChange={setComments} />

            <CustomButtom title={"Guardar"} onPress={()=>{handleSave(); navigation.navigate('Login')}} variant="boton2"/>
        </View>
    )
}

const styles = (theme: string) => StyleSheet.create({
    container:{
        backgroundColor: theme=== 'light'? '#fefcf4': '#111417',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent:'center'

    },
    title:{
        color: theme === 'light' ? '#111417' : '#fefcf4',
        fontSize: 30,
        fontWeight:'bold',
        marginBottom: 15, 
        
    },
    text:{
        color: theme === 'dark'? '#fefcf4': '#111417',
    }
})