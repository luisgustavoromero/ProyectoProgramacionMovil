import { View, StyleSheet, Dimensions } from "react-native"
import CustomSearch from "../components/CustomSearch"
import { useTheme } from "../context/ThemeContext"

export default function HomeScreen({navigation}: any){
    const {theme, toggleTheme} = useTheme()
    const themed= styles(theme)
    return(
        <View style={themed.container}>
            <CustomSearch />
          
        </View>
    )
}
const styles = (theme:string)=> StyleSheet.create({
    container: {
        flex:1,
        width:'100%',
        height:'100%',
        backgroundColor: theme === 'light'? '#fefcf4': '#111417',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 65,
    },
})