import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, FlatList, ScrollView } from 'react-native';
import NewsData from '../../data/NewsData/NewsData';
import NewsPage from '../../components/News/NewsPage';
import { useNavigation } from '@react-navigation/native';

export default function NewsList() {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
                    <FlatList data={NewsData}
                        renderItem={({ item }) => (
                            <ScrollView style={{padding: 20}}>
                                <TouchableOpacity style={styles.card} onPress={() => {
                                    navigation.navigate('NewsPage')
                                }}>
                                    <Image style={styles.image} source={item.img}/>
                                    <View style={styles.flex}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text style={styles.author}>{item.author}</Text>
                                    </View>
                                    <Text style={styles.date}>{item.date}</Text>
                                    <View style={styles.description}>
                                        <Text>{item.half_description}</Text>
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

    date: {
        fontSize: 18,
        paddingLeft: 21, 
        fontWeight: '500',
    },

    description: {
        padding: 15
    },

    image: {
        height: 400,
        alignSelf: 'center',
        width: '100%',
        resizeMode: 'contain'
    }
});

