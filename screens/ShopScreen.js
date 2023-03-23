import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

export default function ShopScreen() {
    return (
        <View>
            <TouchableOpacity>
                <Image source={'../assets/images/McKee_Hat.png'}></Image>
                <View>
                    <Text>Name of Product</Text>
                    <Text>Price of Product</Text>
                </View>
            </TouchableOpacity>
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