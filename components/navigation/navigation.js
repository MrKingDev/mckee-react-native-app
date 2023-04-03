import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
    import HomeScreen from '../../screens/MainScreens/HomeScreen';
    import NewsScreen from '../../screens/MainScreens/NewsScreen';
    import ContactScreen from '../../screens/MainScreens/ContactScreen';
    import ResourceScreen from '../../screens/MainScreens/ResourceScreen';

import ShopScreen from '../../screens/SideScreens/ShopScreen';
import PhotoAlbum from '../../screens/SideScreens/PhotoAlbum';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabNav(){
    return(
        <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size, color }) => {
                let iconName;
                if(route.name === 'Hub') {
                    iconName = focused ? 'home-circle' : 'home-circle-outline';
                } else if(route.name === 'News') {
                    iconName = focused ? 'newspaper-variant' : 'newspaper-variant-outline';
                } else if(route.name === 'Shop') {
                    iconName = focused ? 'shopping' : 'shopping-outline';
                } else if(route.name === 'Resources') {
                    iconName = focused ? 'email-newsletter' : 'email';
                } else if(route.name === 'Contact') {
                    iconName = focused ? 'contacts' : 'contacts-outline';
                }
        
                return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                }
            })
            }
        
            tabBarOptions= {{
                activeTintColor: 'yellow',
                inactiveTintColor: 'white',
                labelStyle: { fontSize: 13, fontWeight: 'bold' },
                inactiveBackgroundColor: '#086300',
                activeBackgroundColor: '#064700', 
                }}
            >
            <Tab.Screen name='Hub' component={DrawerNav} options={{ headerShown: false }}/>
            <Tab.Screen name='News' component={NewsScreen}/>
            <Tab.Screen name='Resources' component={ResourceScreen}/>
            <Tab.Screen name='Contact' component={ContactScreen}/>
        </Tab.Navigator>
    )
}

function DrawerNav(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={HomeScreen}/>
            <Drawer.Screen name='Shop' component={ShopScreen}/>
            <Drawer.Screen name='Photo Album' component={PhotoAlbum}/>
        </Drawer.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='BottomNav' component={TabNav} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    navIndex: {
        width:90,
        height:2,
        backgroundColor:'white',
        position: 'absolute',
        bottom:47,
        borderRadius: '50%'
    }
});