import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList } from 'react-native';

export default function Slider({item}) {

    return (
        <View>
            <Image source={item.img} resizeMode='contain' style={styles.image}/>
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

    image: {
        width: '100%',
    }
});