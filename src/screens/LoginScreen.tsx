import { View, StyleSheet, Text, Alert } from "react-native"
import CustomButtom from "../components/CustomButton"
import CustomInput from "../components/CustomInput"
import { useState, useEffect } from "react"
import accounts from "../../assets/data/accounts.json"
import { useAppDispatch } from "../store/hooks"
import { setClientProfile } from "../store/clientSlice"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useTheme } from "../context/ThemeContext"

export default function LoginScreen({navigation}: any){
    const {theme, toggleTheme} = useTheme()
    const dispatch = useAppDispatch()
    const [email, setEmail]=useState('')
    const [password, setPassword] = useState('')
    const [storedAccounts, setStoredAccounts] = useState([])

    /*useEffect(() => {
        async function loadStoredUsers() {
            const data = await AsyncStorage.getItem("users");

            if (data) {
                setStoredAccounts(JSON.parse(data));
            } else {
                setStoredAccounts([]);
            }
        }

        loadStoredUsers();
    }, []);*/

    async function handleLogin (){
        try{
        const storedData = await AsyncStorage.getItem("users")
        const storedUsers = storedData ? JSON.parse(storedData) : [];

        const allUsers = [...accounts, ...storedUsers];

        const user = allUsers.find(
            (u: any)=>u.email === email.toLowerCase() && u.password === password
        );
        
        if(!user){
            Alert.alert('Error', 'Credenciales incorrectas')
            return
        }

        dispatch(setClientProfile(user));
        navigation.navigate('Tabs')
        }catch(error){
            console.log(error)
            Alert.alert('Error al iniciar sesion')
        }
    }
    const themed = styles(theme)
    return(
        <View style={themed.container}>
            <View style={themed.titleContainer}>
                <Text style={themed.text}>SAVORY</Text>
                <Text style={themed.text}>ATLAS</Text>
            </View>
            <CustomInput value={email} 
            placeholder={"Email"} 
            onChange={setEmail}
            type="email" 
            ></CustomInput>
            <CustomInput value={password} 
            placeholder={"Password"} 
            onChange={setPassword}
            type="password">

            </CustomInput>
            <CustomButtom title={"Log in"}
            onPress={handleLogin} />
            <CustomButtom title={'Sign Up'}
            onPress={()=>{navigation.navigate('Profile')}}
            variant="boton2"/>

        </View>
    )
}

const styles = (theme: string) => StyleSheet.create({
    container: {
        width: '100%',
        height:'100%',
        backgroundColor: theme === 'dark' ? '#111417' : '#fefcf4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color: '#debb89',
        fontSize: 55,
        fontWeight:'bold',
        
    },
    titleContainer:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:40,
    }
})