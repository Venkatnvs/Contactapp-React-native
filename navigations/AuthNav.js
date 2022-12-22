import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LOGIN, SIGNUP } from '../constants/routeNames';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';



const AuthNavigator = () =>{
    const AuthStack = createStackNavigator();
    return (
        <AuthStack.Navigator screenOptions={{headerShown:true}}>
            <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
            <AuthStack.Screen name={SIGNUP} component={SignUp}></AuthStack.Screen>
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;