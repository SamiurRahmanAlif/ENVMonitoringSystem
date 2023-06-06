import { StyleSheet, Text, View } from "react-native";
import database from "@react-native-firebase/database";
import React, { useEffect, useState } from "react";

const Test = () => {
    const[mydata, setData] = useState();
    useEffect(() => {
        getDatabase();
      }, []);

    const getDatabase = async() => {
        try{
            const data = await database().ref('users/1').once('value');

            console.log(data);
            console.log("hello");
            
            setData(data.val());
        }catch(err){
            console.log(err);
        }
    };

  return (
    <View>
      <Text>Name: {mydata? mydata.name : 'Loading....'}</Text>
      <Text>Age: {mydata? mydata.age : 'Loading....'}</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
