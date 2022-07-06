import { View, Text } from 'react-native'
import React from 'react'

const CusText = ({fName1, fName2, lname1, lname2}) => {
    return (
        <View>
            <Text>Your First Name is {fName1} and Last name is {lname1}</Text>
            <Text>Your First Name is {fName2} and Last name is {lname2}</Text>
        </View>
    )
}

const MyCustomTextWith = () => {
  return (
    <View style={{alignItems:'center'}}>
        <CusText fName1="Nawat" fName2="Ponpol" lname1="Arunsawatrerk" lname2="parapagul"/>
    </View>
  )
}

export default MyCustomTextWith