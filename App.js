import { View, Text, StyleSheet } from "react-native";
import React from "react";
// import Logo from "./components/Logo";
import styles from "./components/styles"
import stySheet from "./components/stySheet";

const App = () => {
  return (
    <View style={stySheet.Container}>
      <Text style={stySheet.title}>React native</Text>
      {/* <Logo/> */}
    </View>
  );
};

export default App;
