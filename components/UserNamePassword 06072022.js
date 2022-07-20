import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React,{useState} from 'react'


const UserNamePassword = () => {

    const [eMail, setEMail] = useState('')
    const [password, setEPassword] = useState('')

    const checkTextInput = () => {
        alert("email: " + eMail + "\n" + "password: " + password)
      }


  return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder='Email'
            onChangeText = {(eMail) => (setEMail(eMail))}/>
        <TextInput
            style={styles.input}
            placeholder='Password'
            onChangeText = {(password) => (setEPassword(password))}/>
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
      paddingTop: 23,
      },

    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
      },

    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
      },

    submitButtonText: {
        color: 'white',
      },
})