import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useDispatch } from "react-redux";
import { addVideoData } from "../store/slices/video-slice";

import { v4 } from "uuid";

const styles = StyleSheet.create({
  fixToText: {
    flex: 1,
    flexirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  columnCenter: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default function NewVid() {
  const [title, setTitle] = useState("");
  const [earnings, setEarnings] = useState(0);
  const [translatorName, setTranslatorName] = useState("");
  const [timelinerName, setTimelinerName] = useState("");
  const [proofReaderName, setProofreaderName] = useState("");

  const dispatch = useDispatch();

  const addVideoDataToRedux = () => {
    dispatch(
      addVideoData({
        title,
        translatorName,
        timelinerName,
        proofReaderName,
        earnings,
        id: v4(),
      })
    );

    setTitle("");
    setTranslatorName("");
    setTimelinerName("");
    setProofreaderName("");
    setEarnings(0);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ fontSize: 30 }}> Enter data: </Text>
      <View style={{ margin: 15, justifyContent: "space-evenly" }}>
        <View style={styles.fixToText}>
          <Text style={{ paddingVertical: 10 }}>Video title: </Text>
          <TextInput
            placeholder="Enter video title"
            onChangeText={(newText) => setTitle(newText)}
          />
        </View>

        <View style={styles.fixToText}>
          <Text style={{ paddingVertical: 10 }}>Total earnings: </Text>
          <TextInput
            placeholder="Enter earnings"
            onChangeText={(newText) => setEarnings(newText)}
          />
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.columnCenter}>
            <Text style={{ paddingVertical: 10 }}>Translator </Text>
            <View style={{ justifyContent: "center", height: 30 }}>
              <TextInput
                placeholder="Enter name"
                onChangeText={(newText) => setTranslatorName(newText)}
              />
            </View>
            <Text style={{ paddingVertical: 10 }}>{(earnings / 7) * 3}</Text>
          </View>

          <View style={styles.columnCenter}>
            <Text style={{ paddingVertical: 10 }}>Timeliner </Text>
            <TextInput
              placeholder="Enter name"
              onChangeText={(newText) => setTimelinerName(newText)}
            />
            <Text style={{ paddingVertical: 10 }}>{(earnings / 7) * 2}</Text>
          </View>

          <View style={styles.columnCenter}>
            <Text style={{ paddingVertical: 10 }}>Proofreader </Text>
            <TextInput
              placeholder="Enter name"
              onChangeText={(newText) => setProofreaderName(newText)}
            />
            <Text style={{ paddingVertical: 10 }}>{(earnings / 7) * 2}</Text>
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 200 }}>
        <Button color="#3478f7" title="Add data" onPress={addVideoDataToRedux} />
      </View>
    </SafeAreaView>
  );
}
