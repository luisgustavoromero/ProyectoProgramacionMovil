import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";

type Props = {
    title: string,
    onPress: ()=>void,
    type: 'favorite' | 'comments' | 'settings' | 'logout',
} 

export default function CustomOptions({title, onPress, type}: Props){
    const {theme, toggleTheme} = useTheme()
    const icon = type === 'favorite' ? 'favorite-border':
                type ==='comments' ? 'comment':
                type ==='settings' ? 'settings': 'logout'
    const themed = styles(theme)
    return(
        <TouchableOpacity onPress={onPress} style={themed.container}>
            <MaterialIcons name={icon as any} size={20} color={theme === 'dark'? '#fefcf4': '#111417'}/>
            <Text style={themed.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = (theme:string) => StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems:'center',
        marginVertical:15,
    },
    text:{
        fontSize:20,
        marginLeft: 10,
        color:theme === 'dark'? '#fefcf4': '#111417',
    }
})