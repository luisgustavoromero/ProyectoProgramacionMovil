import { MaterialIcons } from "@expo/vector-icons";
import { View, StyleSheet, Text, TouchableOpacity, TextInput, FlatList } from "react-native";
import restaurants from '../../assets/data/restaurants.json'
import {restaurantsDB} from '../../assets/data/restaurantsDB'
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RestaurantsType, RootStackParamList } from "../navigation/StackNavigator";

type NavProp = NativeStackNavigationProp<RootStackParamList>

export default function CustomSearch(){
    const navigation = useNavigation<NavProp>();

    const [query, setQuery] = useState("")
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantsDB)
    const [showDropdown, setShowDropdown] = useState(false)

    const handleSearch = (text:string)=>{
        setQuery(text);
        if (text.length > 0) {
            const filtered = restaurantsDB.filter((r) =>
                r.restaurantName.toLowerCase().includes(text.toLowerCase())
            );
        setFilteredRestaurants(filtered);
        setShowDropdown(true);
        } else {
            setFilteredRestaurants(restaurantsDB);
            setShowDropdown(true);
        }


    }

    const handleSelect = (restaurant: any) => {
        setQuery(restaurant.restaurantName);
        setShowDropdown(false);

        navigation.navigate("Restaurant", {restaurant})
    }

    return(
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <MaterialIcons name="search" size={18} color={"gray"} />
                <TextInput
                style={styles.input}
                placeholder="Search"
                value={query}
                onChangeText={handleSearch}
                />
            </View>

            {showDropdown && (
                <FlatList
                style={styles.dropdown}
                data={filteredRestaurants}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.item} onPress={() => {handleSelect(item)}}>
                        <Text>{item.restaurantName}</Text>
                    </TouchableOpacity>
          )}
        />
      )}

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 'auto',
        marginTop: 10,
        position: "relative",
    },
    searchContainer:{
        flexDirection: 'row',
        width:'90%',
        height: 45,
        paddingHorizontal: 15,
        borderRadius: 10,
        alignItems:'center',
        backgroundColor:'white',

    },
    text:{
        fontSize:18,
        color:'gray',
        marginLeft: 10,
    },
    input: {
        marginLeft: 10,
        fontSize: 18,
        flex: 1,
    },
    dropdown: {
        backgroundColor: "white",
        maxHeight: 200,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        marginTop: 5,
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },

})