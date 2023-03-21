import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import MainShopScreen from './shopScreens/MainShopScreen';
import MerchSc6reen from './shopScreens/MerchScreen';
6
// Variables
const Drawer = createDrawerNavigator();


export default function ShopScreen() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Main Shop" component={MainShopScreen}/>
            <Drawer.Screen name="Merch" component={MerchSc6reen}/>
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
    },
});