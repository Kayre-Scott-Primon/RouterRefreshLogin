// importações de libs
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

// importações de telas
import Home from './pages/Home'
import Login from './pages/Login'
import Details from './pages/Details';

// variaveis de navegação
const AppStack = createStackNavigator();
const AppStackScreen = () => (
    <AppStack.Navigator > 
        <AppStack.Screen name = 'Home' component={Home}/>
        <AppStack.Screen name = 'Details' component={Details}/>
    </AppStack.Navigator>
)

const AppLoginScreen = () => (
    <AppStack.Navigator screenOptions={{headerShown: false}}> 
        <AppStack.Screen name = 'Login' component={Login}/>
    </AppStack.Navigator>
)

export default function Routes() {

    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name = 'App' component={AppStackScreen}/>
                <AppStack.Screen name = 'Login' component={AppLoginScreen}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}