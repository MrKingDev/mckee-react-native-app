import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PhotoAlbum(){
    return(
        <View style={styles.container}>
            <Text style={{fontSize:25, fontWeight:'bold'}}>Photo Avlumm</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
});
