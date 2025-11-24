import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CreatedProfileScreen from "../screens/CreatedProfileScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

export type TabsParamList ={
    Home: undefined,
    Settings: undefined,
    CreatedProfile: undefined,
    //Restaurant: undefined,
    Favorites: undefined,
}

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{title: 'Inicio', headerShown: false}}></Tab.Screen>
            <Tab.Screen name="CreatedProfile" component={CreatedProfileScreen} options={{title: 'Perfil', headerShown: false}}></Tab.Screen>
        </Tab.Navigator>
    )
}