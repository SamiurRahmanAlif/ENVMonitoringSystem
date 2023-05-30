import React from "react";
import { StyleSheet, View, Text, ImageBackground, image } from "react-native";
export default function Dasbboard({ navigation }) {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require("/assets/Picture1.png")}
        />
        {/* 1st div */}
        <View style={styles.row}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>

        {/* 2nd div */}
        <View style={styles.row}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>

        {/* 3rd div */}
        <View style={styles.row}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    maxHeight: "maxcontent",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch' if you want to stretch the image
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 20,
  },
  box: {
    width: "45%",
    height: 100,
    backgroundColor: "red",
    borderRadius: 20,
  },
});
