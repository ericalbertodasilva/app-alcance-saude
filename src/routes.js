import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Card from './pages/Card';
import Login from './pages/Login';
import Accrediteds from './pages/Accrediteds';

const Stack = createStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Menu" component={Menu} />
                <Stack.Screen name="Contact" component={Contact} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Card" component={Card} />
                <Stack.Screen name="Accrediteds" component={Accrediteds} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}