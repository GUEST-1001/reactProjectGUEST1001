import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
  const textLogo = "Thai-Nicji";
  const isTH = false;
  
  return (
    <View>
      <Text style={styles.TextLogo}>TNI</Text>
      <Text>{textLogo}</Text>

      {/* use if */}
      {/* {
        isTH && <Text>Thai</Text>
      } */}

      {/* use if else */}
      {
        isTH
        ?(<Text>Thai</Text>)
        :(<Text>ENG</Text>)
      }
        

    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    TextLogo:{
        color: "#00ffff",
        fontSize:60,
    }
})
