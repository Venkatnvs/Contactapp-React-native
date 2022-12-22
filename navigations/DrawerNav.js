import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNav';
import { D_HOMENAV } from '../constants/routeNames';

const DrawerNavigator = () =>{
    const DrawerStack = createDrawerNavigator();
    return (
        <DrawerStack.Navigator>
            <DrawerStack.Screen name={D_HOMENAV} component={HomeNavigator}></DrawerStack.Screen>
        </DrawerStack.Navigator>
    );
};

export default DrawerNavigator;