import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList, ScrollView, Button } from 'react-native';

import NewsData from '../../data/NewsData/NewsData';
import { useNavigation } from '@react-navigation/native';


export default function NewsPage() {
    const navigation = useNavigation();
    return (
    

    <SafeAreaView>
                <View style={{ padding:20}}>
                    <Button title="Back" onPress={() => {
                        navigation.navigate('News')
                    }}></Button>
                </View>
                <View>
                    <FlatList style={{backgroundColor: 'white'}} data={NewsData}
                        renderItem={({ item }) => (
                            <ScrollView style={{padding: 20}}>
                                <Image style={styles.image} source={item.img}/>
                                <View style={styles.flex}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.author}>{item.author}</Text>
                                </View>
                                <View style={styles.description}>
                                    <Text>{item.description}</Text>
                                </View>
                            </ScrollView>
                        )}
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

    

    flex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    author: {
        fontSize: 18,
        fontWeight: '500',
    },

    description: {
        padding: 15
    },

    image: {
        height: 400,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        alignSelf: 'center',
        width: '100%',
        resizeMode: 'contain'
    }
});

