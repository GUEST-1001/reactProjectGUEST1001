import { View, TextInput ,Button } from "react-native";
import React from "react";

const TextinpuEX = () => {
  return (
    <View style={{ padding: 50 }}>
      <View
        style={{
          flex: "1",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>

        <TextInput
          placeholder="couse Goal"
          style={{
            width: "80%",
            borderColor: "black",
            borderWidth: "1",
            padding: "10",
          }}
        />
        <Button title="Don't" />
      </View>
    </View>
  );
};

export default TextinpuEX;
