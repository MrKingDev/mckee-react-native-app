import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList, ScrollView } from 'react-native';

import NewsData from '../../data/NewsData/NewsData';

export default function NewsScreen() {
    return (
    

    <SafeAreaView>
        <View>
            <Text style={{fontSize:25, fontWeight:'bold'}}>News</Text>
        </View>

                <FlatList data={NewsData}
                    renderItem={({ item }) => (
                        <ScrollView>
                            <View style={styles.box}>
                                <Image source={item.img}/>
                                <View>
                                    <Text>{item.title}</Text>
                                    <Text>{item.author}</Text>
                                    <Text>{item.description}</Text>
                                </View>
                            </View>
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

    box: {
        borderColor: 'black',
        borderWidth: 5,
    },
});

