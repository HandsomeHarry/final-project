import { View, Text, Button } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

// import * as FileSystem from "expo-file-system";

export default function Data() {
  const allVideoData = useSelector((state) => state.videoData);

  const exportVideoData = async () => {
    // try {
    //   await FileSystem.writeAsStringAsync(
    //     FileSystem.documentDirectory + "videoData.json",
    //     allVideoData
    //   );

    //   alert("File was successfully saved");
    // } catch (err) {
    //   console.log(err)
    //   alert("There was an error");
    // }
  };

  return (
    <View>
      <Button title="Export Data" onPress={exportVideoData} />
    </View>
  );
}
