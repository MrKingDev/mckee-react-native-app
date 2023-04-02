import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function MerchDisplay({item, onPress}) {

    return (
            <ScrollView style={{flex: 1, padding: 15}} showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={styles.card} onPress={onPress}>
                        <Image source={item.img} style={styles.thumb}/>

                        <View style={styles.infoContainer}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.price}>${item.price}</Text>
                        </View> 
                </TouchableOpacity>
            </ScrollView>
    );
}

const styles = StyleSheet.create({

    card: {
        backgroundColor: 'white',
        borderRadius: 35,
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: {
        height: 0,
        width: 0,
        },
        elevation: 1,
        marginVertical: 25,
    },
    thumb: {
        height: 400,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        alignSelf: 'center',
        width: '100%',
        resizeMode: 'contain'
    },
    infoContainer: {
        padding: 23,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
    },
});