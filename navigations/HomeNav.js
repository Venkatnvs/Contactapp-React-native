import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CONTACT_CREATE, CONTACT_DETAILS, CONTACT_LIST, SETTINGS } from '../constants/routeNames';
import Contacts from '../screens/Contacts';
import ContactsDetail from '../screens/ContactsDetail';
import CreateContact from '../screens/CreateContact';
import Settings from '../screens/Settings';


const HomeNavigator = () =>{
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name={CONTACT_DETAILS} component={ContactsDetail}></HomeStack.Screen>
            <HomeStack.Screen name={CONTACT_CREATE} component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
};

export default HomeNavigator;