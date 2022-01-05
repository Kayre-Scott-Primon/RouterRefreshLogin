// importações de libs
import React, { useState} from 'react'
import {
    View,
    Text,
    Button,
    TextInput
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

// importando estilos
import styles from './style'

export default function Details(){

    const [ value, setValue ] = useState('')
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Details
            </Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={setValue}
            />
            <Button
                onPress={() => navigation.navigate('Login',{})}
                title='Call Login'
                color='#a22'
            />
        </View>
    )
}