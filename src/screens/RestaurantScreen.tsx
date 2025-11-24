import { View, StyleSheet, Text, FlatList } from "react-native";
import CustomButtom from "../components/CustomButton";
import restaurants from '../../assets/data/restaurants.json'
import { useState, useEffect } from "react";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { useTheme } from "../context/ThemeContext";


export default function RestaurantScreen({route, navigation}:any){
    const {theme, toggleTheme} = useTheme()
    const {restaurant} = route.params;

    if (!restaurant) return null;
    const themed = styles(theme);
    return(
        <View style={themed.container}>
            <View style={themed.picContainer}></View>
            <View style={themed.informationContainer}>
                <Text style={themed.title}>{restaurant.restaurant}</Text>
                <Text style={themed.text}>{restaurant.category}</Text>
                <Text style={themed.text}>{restaurant.priceRange}</Text>
                <Text style={themed.text}>{restaurant.hours}</Text>
                <Text style={themed.text}>{restaurant.address}</Text>
            </View>
            <View style={themed.commentsContainer}>
                <Text style={themed.title}>Comentarios</Text>
                <FlatList data={restaurant.comments}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={themed.text}>
                            <Text style={themed.text}>{item.username}</Text>
                            <Text style={themed.text}>{item.comment}</Text>
                            <StarRatingDisplay rating={item.rating} starSize={16} />
                        
                </View>
                )}
                />
            </View>
            <CustomButtom title={"Add Comment"} onPress={()=>{}} />
            
        </View>
    )
}

const styles = (theme:string) => StyleSheet.create({
    container:{
        height: '100%',
        width:'100%',
        backgroundColor: theme === 'light'? '#fefcf4': '#111417',
        paddingVertical: 65,
        alignItems:'center'
        
    },
    picContainer:{
        height: '22%',
        width:'88%',
        borderRadius: 15,
        backgroundColor:'#debb89'
    },
    informationContainer:{
        height:'28%',
        width:'88%',
        marginVertical: 10,
    },
    title:{
        fontSize: 30,
        marginBottom:10,
        color: theme === 'dark'? '#fefcf4': '#111417',
    },
    text:{
        fontSize: 16,
        paddingVertical:5,
        marginBottom: 5,
        color: theme === 'dark'? '#fefcf4': '#111417',
    },
    commentsContainer:{
        height: '45%',
        width:'88%',
        marginBottom:5,
    },

    

})