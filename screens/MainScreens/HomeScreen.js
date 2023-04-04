import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, ScrollView } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:25, fontWeight:'bold'}}>Home Page</Text>
            <Text>Welcome!</Text>
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