import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ScreenOne = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen One</Text>
      <Button
        title="SignUp"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button
        title="SignIn"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ScreenOne;
