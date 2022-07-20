import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import React from "react";


const Separator = () => (
    <View style={styles.separator}/>
)

const ButtonExample = () => {
  return (
    <SafeAreaView style={styles.container}>

        <View>
            <Text style={styles.title}>
            The title and onPress handler are required.It is recommended to set
            accessigilityLabel to thelp make your app usable by everyone.
            </Text>
            <Button
            title="Press ME!!!"
            onPress={() => alert("Simple Button pressed")}
            />
            <Separator/>
        </View>

        <View>
            <Text style={styles.title}>
            The title and onPress handler are required.It is recommended to set
            accessigilityLabel to thelp make your app usable by everyone.
            The title and onPress handler are required.It is recommended to set
            accessigilityLabel to thelp make your app usable by everyone.
            </Text>
            <Button
            title="Press ME!!!"
            color='pink'
            onPress={() => alert("Button With 'PINK'")}
            />
            <Separator/>
        </View>

        <View>
            <Text style={styles.title}>
            The title and onPress handler are required.
            </Text>
            <Button
            title="Press ME!!!"
            disabled //Buttion can not press
            />
            <Separator/>
        </View>

        <View>
            <Text style={styles.title}>
            The title and onPress handler are required. The title and onPress handler are required.
            </Text>
            <View style={styles.fixToText}>
                <Button
                title="Left button"
                onPress={() => alert("Left Button press")}
                />
                <Button
                title="Right button"
                onPress={() => alert("Right Button press")}
                />
            </View>
        </View>
    </SafeAreaView>
  );
};

export default ButtonExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
    marginBottom: 10,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
