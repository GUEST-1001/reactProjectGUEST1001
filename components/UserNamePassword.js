import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React,{useState} from 'react'


const UserNamePassword = () => {

    const [textInputEmail, setTextInputEmail] = useState('')
    const [textInputName, setTextInputName] = useState('')

    const checkTextInput = () => {
        if(!textInputName.trim()) {
            alert('Please Enter Name');
            return;
        }
        if(!textInputEmail.trim()) {
            alert('Please Enter Email');
            return;
        }
        else {
            alert('Success');
            return;
        }
      }


  return (
    <View style={styles.container}>
        <TextInput
            style={styles.textInputStyle}
            placeholder='Name'
            onChangeText = {(name) => (setTextInputName(name))}/>
        <TextInput
            style={styles.textInputStyle}
            placeholder='Email'
            onChangeText = {(email) => (setTextInputEmail(email))}/>
        <Button
            color='#7a42f4'
            title="submit"
            onPress={checkTextInput}/>
    </View>

    
  )
}

export default UserNamePassword

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
      },

    textInputStyle: {
        width: '100%',
        marginTop: 15,
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
      },

})