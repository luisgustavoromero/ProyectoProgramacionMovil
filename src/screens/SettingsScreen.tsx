import { View, StyleSheet, Text, Switch } from "react-native"
import { useTheme } from "../context/ThemeContext"

export default function SettingsScreen({navigation}: any){
    const {theme, toggleTheme} = useTheme()
    const themed = styles(theme)
    return(
        <View style={themed.container}>
            <Text style={themed.text}>DarkMode</Text>
            <Switch
                value={theme==='light'}
                onValueChange={toggleTheme}
            />
        </View>
    )
}

const styles = (theme: string) => StyleSheet.create({
    container: {
        width: '100%',
        height:'100%',
        paddingTop: 70,
        paddingLeft: 40,
        backgroundColor: theme==='light'?'#fefcf4': '#111417',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    text:{
        color: theme==='light'?'black':'white',
        fontSize:30,
        fontWeight:'bold',
    }
})