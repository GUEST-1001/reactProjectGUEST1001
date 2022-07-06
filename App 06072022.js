import { View, Text, style } from 'react-native'
import React from 'react'
import Logo from "./components/Logo";
import User from './components/User';
import LotsOfGeetigs from './components/LotsOfGeetigs';
import MyCustomTextWith from './components/MyCustomTextWith';
import Count from './components/Count';
import InputText from './components/inputText';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Logo/> */}
      {/* <User/> */}
      {/* <LotsOfGeetigs /> */}
      {/* <MyCustomTextWith /> */}
      {/* <Count/> */}
      <InputText/>
    </View>
  )
}

const styles = StyleSheet.create=({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default App