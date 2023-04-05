import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, FlatList, ScrollView } from 'react-native';

import NewsData from '../../data/NewsData/NewsData';

export default function NewsScreen() {
    return (
    

    <SafeAreaView>
        <View>
            <Text style={{fontSize:25, fontWeight:'bold'}}>News</Text>
        </View>

                <FlatList data={NewsData}
                    renderItem={({ item }) => (
                        <ScrollView style={{padding: 20}}>
                            <TouchableOpacity style={styles.card}>
                                <Image source={item.img}/>
                                <View>
                                    <Text>{item.title}</Text>
                                    <Text>{item.author}</Text>
                                    <Text>{item.description}</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    )}
                />
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
});

