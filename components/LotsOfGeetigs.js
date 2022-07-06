import { View, Text } from 'react-native'
import React from 'react'

const Greeting = ({name, date}) => {
    return (
        <View>
            <Text>Hello {name} {date}</Text>
        </View>
    )
};

const LotsOfGeetigs = () => {
  return (
    <View style={{alignItems:'center'}}>
        <Greeting name="Marry Christmes" date="25/12/2022"/>
        <Greeting name="HBD" date="25/12/2022"/>
        <Greeting name="Water" date="25/12/2022"/>
    </View>
  )
}

export default LotsOfGeetigs