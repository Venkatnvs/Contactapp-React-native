import React, {useContext, useEffect, useState} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from './DrawerNav';
import AuthNavigator from './AuthNav';
import { GlobalContext } from '../context/provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';

const AppNavContainer = () =>{
    const [isAuthenticated,setisAuthenticated] = useState(false);
    const [authloaded,setAuthloaded] = useState(false);
    const {authState:{isLoggedIn},} = useContext(GlobalContext);

    const getUser = async () => {
        try {
            const user = await AsyncStorage.getItem('user');
            if(user){
                setAuthloaded(true);
                setisAuthenticated(true);
            }else{
                setAuthloaded(true);
                setisAuthenticated(false);
            }
        } catch (error) {}
    };

    useEffect(()=> {
        getUser();
    },[])

    return (
        <>
        {authloaded ? (
            <NavigationContainer>
                { isLoggedIn || isAuthenticated ? <DrawerNavigator/> : <AuthNavigator/> }
            </NavigationContainer>
        ) : (
            <ActivityIndicator/>
        )}
        </>
    );
};

export default AppNavContainer;