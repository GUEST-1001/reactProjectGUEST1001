import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import React from "react";

const TouchableEx = () => {
    const OnPress = (msg) => {
        alert('Aler for ' + msg)
    };

  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>

                <View>

                    <TouchableNativeFeedback
                    style={styles.button}
                        onPress={() => OnPress('TouchableNativeFeedback')}
                    >
                        <Text>TouchableNativeFeedback only Android</Text>
                    </TouchableNativeFeedback>
                    
                    <TouchableHighlight
                        onPress={() => OnPress('TouchableHighlight')}
                        style={styles.button}
                    >
                            <Text>TouchableHighlight</Text>
                    </TouchableHighlight>
                    
                    <TouchableOpacity
                        onPress={() => OnPress('TouchableOpacity')}
                        style={styles.button}
                    >
                        <Text>TouchableOpacity</Text>
                    </TouchableOpacity>

                    <TouchableWithoutFeedback
                        onPress={() => OnPress('TouchableWithoutFeedback')}
                    >
                        <View style={styles.button}>
                            <Text>TouchableWithoutFeedback</Text>
                        </View>
                    </TouchableWithoutFeedback>

                </View>

        </View>
    </SafeAreaView>
  );
};

export default TouchableEx;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD', //color of button 
        padding: 10,
        width: 300,
        marginTop: 16,
    },
});
