import React from 'react'
import { Text, View } from 'react-native'

const PatientScreen = () => {
    return (
    <View>
        <Text>Hello </Text>
    </View>
    )
};

PatientScreen.navigationOptions = {
    title: 'Карта пациента',
    headerTintColor: '#2A86FF',
    headerStyle: {
        elevation: 0.8, //android
        shadowOpacity: 0.8 // IOS
    }
};

export default PatientScreen
