import { StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import { Button } from "react-native-web";

const simpleAlertHanler = () => {
  alert("Hello  I am Simple Alert");
};
const twoOptionAlertHanler = () => {
  //use Alert from react native
  Alert.alert(
    //Title
    "Hello",
    //body
    "I am two option Alert from React native",
    [
      {
        text: "Yes",
        onPress: () => alert("Yes Press"),
      },
      {
        text: "No",
        onPress: () => alert("No Press"),
        style: "cancel",
      },
    ],
    //clicking out side Alert not Enable
    { cancelable: false }
  );
};

const AlertComponents = () => {
  return (
    <View style={styles.container}>
      <Button title="Simple Alert" onPress={simpleAlertHanler} />

      <Button title="lert with two option" onPress={twoOptionAlertHanler} />
    </View>
  );
};

export default AlertComponents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
});
