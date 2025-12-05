import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, ThemeContext } from '@react-navigation/native';
import { navigationRef } from './src/navigation/NavigationService';
import StackNavigator from './src/navigation/StackNavigator';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { ThemeProvider } from './src/context/ThemeContext';


export default function App() {
  return (
    <Provider store={store}>
      
        <ThemeProvider>
          <NavigationContainer ref={navigationRef}>
            <StackNavigator />
          </NavigationContainer>
        </ThemeProvider>
      
    </Provider>
    
  );
}
