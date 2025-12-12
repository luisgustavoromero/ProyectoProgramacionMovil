import { View, StyleSheet, Dimensions } from "react-native"
import CustomSearch from "../components/CustomSearch"
import { useTheme } from "../context/ThemeContext"
import MapView from "react-native-maps"
import { useState } from "react"

export default function MapScreen({navigation}: any){
    const {theme, toggleTheme} = useTheme()
    const themed= styles(theme)

    const [origin, setOrigin] = useState(
        {
            latitude: 15.530280061068725,
            longitude: -88.03203930574135,
        }
    );
    return(
        <View style={themed.container}>
            {/*<CustomSearch />*/}
            <MapView style={themed.map}
            initialRegion={{latitude: origin.latitude, longitude: origin.longitude,
                latitudeDelta: 0.035,
                longitudeDelta: 0.035,
            }}/>

            
          
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
    map:{
        width: '100%',
        height: '100%',
    }
})