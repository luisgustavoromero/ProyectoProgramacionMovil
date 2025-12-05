import { View, StyleSheet, TextInput, Animated, Text } from "react-native";
import restaurants from '../../assets/data/restaurants.json'
import { restaurantsDB } from "../../assets/data/restaurantsDB";
import { commmentsDB } from "../../assets/data/commentsDB";
import { useTheme } from "../context/ThemeContext";
import CustomInput from "../components/CustomInput";
import { useEffect, useRef, useState } from "react";
import CustomButtom from "../components/CustomButton";
import StarRating from "react-native-star-rating-widget";
import { useAppSelector } from "../store/hooks";


export default function NewCommentScreen ({route, navigation}: any){
    const {theme, toggleTheme} = useTheme();
    const {restaurant} = route.params;
    if (!restaurant) return null;
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const profile = useAppSelector((state)=>state.client)

    const slideAnim = useRef(new Animated.Value(500)).current; // inicia fuera de pantalla
   


  // ANIMACIÓN AL APARECER (sube)
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleComment = () =>{
    const NewComment = {
        username: profile.name,
        email: profile.email,
        restaurant: restaurant.restaurantName.toString(),
        rating: rating,
        comment: comment,
    }

    commmentsDB.push(NewComment)
    restaurant.comments.push(NewComment)
    navigation.navigate('Restaurant',{restaurant})
  }


    
    const themed = styles(theme);
    return(
        <Animated.View style={[themed.container, {transform: [{translateY: slideAnim}]}]}>
            <View style={themed.informationContainer}>
                <Text style={themed.title}>{restaurant.restaurantName.toString()}</Text>
                <Text style={themed.text}>{restaurant.category.toString()}</Text>
                <Text style={themed.text}>{restaurant.priceRange.toString()}</Text>
                <Text style={themed.text}>{restaurant.hours.toString()}</Text>
                <Text style={themed.text}>{restaurant.address.toString()}</Text>
            </View>
            <StarRating rating={rating} onChange={setRating} starSize={24} />
            <CustomInput value={comment} 
            placeholder={'Ingrese su comentario'} 
            onChange={setComment} 
            multiline={true}/>

            <CustomButtom title={'Agregar comentario'} onPress={handleComment} />
        </Animated.View>
        
    )
}

const styles = (theme: string) => StyleSheet.create({
    container:{
        height: '100%',
        width:'100%',
        backgroundColor: theme === 'light'? '#fefcf4': '#111417',
        paddingVertical: 65,
        alignItems: 'center',


    },
    overlay: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.45)",
      justifyContent: "flex-end",
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
})