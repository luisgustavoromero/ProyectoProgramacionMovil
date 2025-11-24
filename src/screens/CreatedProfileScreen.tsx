import { View, Text, StyleSheet } from "react-native";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import CustomOptions from "../components/CustomOptions";
import { clearClientProfile } from "../store/clientSlice";
import { useTheme } from "../context/ThemeContext";
export default function CreatedProfileScreen ({navigation}: any){
    const {theme, toggleTheme} = useTheme()
    const dispatch = useAppDispatch()
    const profile = useAppSelector((state)=>state.client)

    const handleLogout = () =>{
        dispatch(clearClientProfile());
        navigation.replace('Login')
    }
    const themed = styles(theme)
    return(
        <View style={themed.container}>
            <View style={themed.profileContainer}>
                <View style={themed.profilePic}> </View>
                <Text style={themed.name}>{profile.name}</Text>
            </View>
            <View style={themed.descriptionContainer}>
                <Text style={themed.text}>Favorito:</Text>
                <Text style={themed.text2}>{profile.favorite}</Text>
                <Text style={themed.text}>Comentarios:</Text>
                <Text style={themed.text2}>{profile.comments}</Text>
            </View>
            <View style={themed.optionsContainer}>
                <CustomOptions title={"Favoritos"} onPress={()=>{navigation.navigate('Favorites')}} type={"favorite"} />
                <CustomOptions title={"Comentarios"} onPress={()=>{navigation.navigate('Comments')}} type={"comments"} />
                <CustomOptions title={"Configuraciones"} onPress={()=>{navigation.navigate('Settings')}} type={"settings"} />
                <CustomOptions title={"Cerrar Sesion"} onPress={handleLogout} type={"logout"} />

            </View>
            

        </View>
    )
}

const styles = (theme: string) => StyleSheet.create({
    container:{
        backgroundColor: theme === 'light'? '#fefcf4': '#111417',
        width: '100%',
        height: '100%',
        alignItems:'center',
        justifyContent: 'center',

    },
    profileContainer:{
        width:'85%',
        height:'25%',
        
        justifyContent:'center',
        alignItems:'center',
        marginVertical: 10,
        marginTop: 30,

    },
    profilePic:{
        height: '65%',
        width: '40%',
        backgroundColor: '#debb89',
        borderRadius: 70,
    },

    descriptionContainer:{
        height:'20%',
        width:'85%',
        marginVertical: 10,
        marginTop: 15,
        
    },
    optionsContainer:{
        height:'35%',
        width:'85%',
        marginVertical: 10,
        
    },

    name:{
        fontSize: 30,
        color: theme === 'dark'? '#fefcf4': '#111417',

    },
    text:{
        fontWeight:'bold',
        fontSize: 20,
        color: theme === 'dark'? '#fefcf4': '#111417',
    },
    text2:{
        color: theme === 'dark'? '#fefcf4': '#111417',
    }
})