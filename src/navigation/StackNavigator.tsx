import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TabsNavigator from "./TabsNavigator";
import CreatedProfileScreen from "../screens/CreatedProfileScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import CommentsScreen from "../screens/CommentsScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
import CustomSearch from "../components/CustomSearch";



export type RootStackParamList = {
    Login: undefined,
    Home: undefined,
    Tabs: undefined,
    Search: undefined,
    Settings: undefined,
    Profile: undefined,
    CreatedProfile: undefined,
    Favorites: undefined,
    Comments: undefined,
    Restaurant: any,
    CustomSearch: undefined,
    

}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator () {
    return(
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name='Login' component={LoginScreen}></Stack.Screen>
            <Stack.Screen name='Tabs' component={TabsNavigator}></Stack.Screen>
            <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>

            <Stack.Screen name='Search' component={SearchScreen}></Stack.Screen>
            <Stack.Screen name='Settings' component={SettingsScreen}></Stack.Screen>
            <Stack.Screen name='Profile' component={ProfileScreen}></Stack.Screen>
            <Stack.Screen name='CreatedProfile' component={CreatedProfileScreen}></Stack.Screen>
            <Stack.Screen name='Favorites' component={FavoritesScreen}></Stack.Screen>
            <Stack.Screen name='Comments' component={CommentsScreen}></Stack.Screen>
            <Stack.Screen name='Restaurant' component={RestaurantScreen}></Stack.Screen>
            <Stack.Screen name='CustomSearch' component={CustomSearch}></Stack.Screen>
        </Stack.Navigator>
    )
}