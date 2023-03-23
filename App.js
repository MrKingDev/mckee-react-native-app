import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import HomeScreen from './screens/HomeScreen';
import NewsScreen from './screens/NewsScreen';
import ResourceScreen from './screens/ResourceScreen';
import SocialsScreen from './screens/SocialsScreen';
import ShopScreen from './screens/ShopScreen';

// Variables
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;

          if(route.name === 'Home') {
            iconName = focused ? 'home-circle' : 'home-circle-outline';
          } else if(route.name === 'News') {
            iconName = focused ? 'newspaper-variant' : 'newspaper-variant-outline';
          } else if(route.name === 'Shop') {
            iconName = focused ? 'shopping' : 'shopping-outline';
          } else if(route.name === 'Resources') {
            iconName = focused ? 'email-newsletter' : 'email';
          } else if(route.name === 'Socials') {
            iconName = focused ? 'contacts' : 'contacts-outline';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        }
      })}

      tabBarOptions= {{
        activeTintColor: 'yellow',
        inactiveTintColor: 'white',
        labelStyle: { fontSize: 13, fontWeight: 'bold' },
        inactiveBackgroundColor: '#086300',
        activeBackgroundColor: '#064700',
        // tabStyle: {height: 60},
      }}
      >
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='News' component={NewsScreen}/>
        <Tab.Screen name='Shop' component={ShopScreen}/>
        <Tab.Screen name='Resources' component={ResourceScreen}/>
        <Tab.Screen name='Socials' component={SocialsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
