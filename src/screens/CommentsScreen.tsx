import { View, StyleSheet, Text, FlatList } from "react-native";
import comments from "../../assets/data/comments.json"
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { useTheme } from "../context/ThemeContext";

export default function CommentsScreen({navigation}:any){
    const {theme, toggleTheme} = useTheme()
    const themed = styles(theme)
    return(
        <View style={themed.container}>
            <Text style={themed.title}>Comentarios realizados</Text>
            <FlatList 
            data={comments}
            keyExtractor={(item, index)=>index.toString()}
            renderItem={({item})=>(
                <View style={themed.commentContainer}>
                    <Text>{item.username}</Text>
                    <Text>{item.restaurant}</Text>
                    <StarRatingDisplay rating={item.rating} starSize={20}/>
                    <Text>{item.comment}</Text>


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
    commentContainer:{
        marginLeft:20,
        width:'92%',
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