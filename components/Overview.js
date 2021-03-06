import React from 'react';
import { Text, View, StyleSheet, Image, FlatList, Button } from 'react-native';
import { ScrollView } from 'react-native-web';
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
        backgroundColor: '#fff',
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
        return <View style={{ marginHorizontal: 20, backgroundColor: '#fff', padding:20, borderRadius: 9, }}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.list}>Total earnings: {item.earnings}</Text>
            <View style={{ flexDirection: "row", backgroundColor: '#fff', paddingHorizontal:30 }}>
                <View style={{ flexDirection: "column" }}>
                    <Text style={styles.list}>Translator: {item.translatorName}</Text>
                    <Text style={styles.list}>Earning: {item.earnings / 7 * 3}</Text>
                </View>
                <View style={{ flexDirection: "column" }}>
                    <Text style={styles.list}>Timeliner: {item.timelinerName}</Text>
                    <Text style={styles.list}>Earning: {item.earnings / 7 * 2}</Text>
                </View>
                <View style={{ flexDirection: "column" }}>
                    <Text style={styles.list}>Proofreader: {item.proofReaderName}</Text>
                    <Text style={styles.list}>Earning: {item.earnings / 7 * 2}</Text>
                </View>
            </View>
            <View style={{ alignContent: "center", backgroundColor: '#fff', paddingHorizontal:200 }}>
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
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}