import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, FlatList, ScrollView } from 'react-native';

import NewsData from '../../data/NewsData/NewsData';
import NewsPage from '../../components/News/NewsPage';
import NewsList from '../../components/News/NewsList';

export default function NewsScreen({navigation}) {
    return (
    

    <SafeAreaView>
        <NewsList/>
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

