import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginForm from "../pages/LoginForm";

const stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LoginForm" component={LoginForm} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default Router
