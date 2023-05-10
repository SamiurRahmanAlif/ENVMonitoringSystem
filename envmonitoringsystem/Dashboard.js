import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Dasbboard  ({ navigation }) {
  return (
    <View style={styles.container}>

      {/* 1st div */}
      <View style={styles.row}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>

      {/* 2nd div */}
      <View style={styles.row}>
        <View style={styles.box}>
        </View>
        <View style={styles.box}></View>
      </View>

      {/* 3rd div */}
      <View style={styles.row}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
  },
  box: {
    width: '45%',
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
  },
});