import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';


import MerchData from '../../data/ShopData/MerchData';
import MerchDisplay from '../../components/Shop/MerchDisplay';

export default function ShopScreen() {

    return (
        <SafeAreaView>
            <View>
                <FlatList data={MerchData}
                renderItem={({item}) => <MerchDisplay item={item}/>}
                />
            </View>

            <View style={{padding:20}}>
                <Text>Section 2</Text>
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