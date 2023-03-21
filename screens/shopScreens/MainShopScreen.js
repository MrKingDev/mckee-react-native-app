import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MainShopScreen() {
    return (
    <View style={styles.container}>
        <Text style={{fontSize:25, fontWeight:'bold'}}>Main Shop</Text>
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