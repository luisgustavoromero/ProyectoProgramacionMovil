import { View, StyleSheet, Text, FlatList } from "react-native";
import favorites from '../../assets/data/favorites.json'
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { useTheme } from "../context/ThemeContext";

export default function FavoritesScreen({navigation}:any){
    const {theme, toggleTheme} = useTheme()
    const themed = styles(theme)
    return(
        <View style={themed.container}>
            <Text style={themed.title}>Restaurantes favoritos</Text>
            <FlatList 
            data={favorites}
            keyExtractor={(item) => item.username}
            renderItem={({ item }) => (
                <View style={themed.favoritesContainer}>
                    <Text>{item.username}</Text>
                    <FlatList
                    data={item.favorites}
                    keyExtractor={(fav, index) => fav.restaurant + index}
                    renderItem={({ item: fav }) => (
                        <View >
                            <Text >{fav.restaurant}</Text>
                            <Text >⭐ {fav.rating}</Text>
                        </View>
                     )}
                    />
                </View>
            )}
            />
        </View>
    )
}

const styles = (theme: string) => StyleSheet.create({
    container:{
        flex: 1,
        height:'100%',
        width: '100%',
        paddingTop: 60,
        paddingBottom:20,
        backgroundColor: theme === 'light'? '#fefcf4': '#111417',
        justifyContent:'center',
        alignItems:'center',

    },
    favoritesContainer:{
        width:380,
        backgroundColor: '#debb89',
        marginVertical:5,
        borderRadius:10,
        padding:5,
        
    },
    text:{
        fontSize:16,
    },
    title:{
        fontSize: 24,
        fontWeight:'bold',
        color: theme === 'dark'? '#fefcf4': '#111417',
        marginBottom: 20,
    }

})