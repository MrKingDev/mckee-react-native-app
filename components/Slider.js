import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Slider({item, onPress}) {

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={item.img} style={styles.thumb}/>

            <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View> 
        </TouchableOpacity>

        // <View style={styles.container}>
        //     <Image source={item.img} resizeMode='contain' style={styles.image}/>

        //     <View style={styles.content}>
        //         <Text style={styles.name}>{item.name}</Text>
        //         <Text style={styles.price}>${item.price}</Text>
        //     </View>
        // </View>
    );
}

const styles = StyleSheet.create({
    // container: {
    // alignItems: 'center',
    // },

    // image: {
    //     width: '100%',
    // },

    // content: {
    //     alignItems: 'center'
    // },

    // name: {
    //     fontSize: 24,
    //     fontWeight: 'bold'
    // }

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
        width: '80%',
        
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