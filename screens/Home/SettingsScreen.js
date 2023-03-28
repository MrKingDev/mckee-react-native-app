import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, ScrollView } from 'react-native';

export default function SettingsScreen() {
    return (
        <SafeAreaView>
            <Text>Settings Page</Text>
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