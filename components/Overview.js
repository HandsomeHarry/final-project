import React from 'react';
import { Text, View, StyleSheet, Image, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeVideoData } from '../store/slices/video-slice';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
    },
});


export default function AssetExample() {
    const videoData = useSelector(state => state.videoData);
    const dispatch = useDispatch();

    const removeItemFromVideoData = (id) => {
        dispatch(removeVideoData(id));
    }


    const renderItem = ({ item }) => {
        return <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.list}>Total earnings:{item.earnings}</Text>
            <View style={{ flexDirection: "row" }}>
                <Text style={styles.list}>Translator: {item.translatorName}, earning: {item.earnings / 7 * 3}</Text>
                <Text style={styles.list}>Timeliner: {item.timelinerName}, earning: {item.earnings / 7 * 2}</Text>
                <Text style={styles.list}>Proofreader: {item.proofReaderName}, earning: {item.earnings / 7 * 2}</Text>
                <Button
                    color="red"
                    title="Delete"
                    onPress={() => {
                        removeItemFromVideoData(item.id)
                    }}
                />
            </View>
        </View >
    }
    return (
        <View>
            <FlatList
                data={videoData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}