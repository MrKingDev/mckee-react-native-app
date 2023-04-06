import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, ScrollView } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:25, fontWeight:'bold'}}>Home Page</Text>
            <Text>Welcome to the Mckee School App!</Text>
            <Image source={require('../../assets/images/homepage/mckke23schoolpicture.jpg')} style={{position: 'absolute', top: 0,width: '100%', height: '30%', opacity: 0.72}} />
            <Image source={require('../../assets/images/homepage/mckeelogo.png')} style={{position: 'absolute', top: 30,width: '70%', height: '20%'}} />
            <Text>v0.0.1</Text>
        </View>
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