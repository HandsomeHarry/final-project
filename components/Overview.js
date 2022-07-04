import React from 'react';
import { Text, View, StyleSheet, Image, FlatList, Button } from 'react-native';
import { useSelector } from 'react-redux';


export default function AssetExample() {
    const videoData = useSelector(state => state.videoData);
    const renderItem = ({ item }) => {
        return <View>
            <Text>{item.title}</Text>
            <Text>{item.earnings}</Text>
        </View >
    }
    return (
        <View>
            <FlatList data={videoData} renderItem={renderItem} keyExtractor={item => item.id}
            />
        </View>
    );
}