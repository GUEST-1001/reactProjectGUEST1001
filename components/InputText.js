import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useState} from 'react'

const InputText = () => {

    const [userName, setUserName] = useState('')

  return (
    <View style={{flex:1, marginTop:20, alignItems:'center'}}>
      <Text>Insert any Text Below</Text>
      <TextInput
        value={userName}
        onChangeText = {(value_from_keyboard) => (setUserName(value_from_keyboard))}
        style={styles.textinput}
        placeholder='Plase Input Username'/>
        
        <Text>{userName}</Text>
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({
    textinput:{
        width:300,
        height:45,
        padding:10,
        marginTop:20,
        marginBottom:10,
        backgroundColor:'#e8e8e8'
    }
})