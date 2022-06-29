import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Button Example</Text>
      <Button
        title='click me'
        color='purple'
        style={{
          
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})