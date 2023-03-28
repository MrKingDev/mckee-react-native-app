import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import SlideShow from '../data/SlideShow';
import Slider from '../components/Slider';

export default function ShopScreen() {

    return (
        <SafeAreaView>
            <View>
                <FlatList data={SlideShow}
                renderItem={({item}) => <Slider item={item}/>}
                />
            </View>
        </SafeAreaView>
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