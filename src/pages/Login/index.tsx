// importações de libs
import React, { useEffect } from 'react'
import {
    View,
    Text,
    Button,
    BackHandler,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

// importando estilos
import styles from './style'

export default function Login(){

    const navigation = useNavigation();

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            backButtonClick()
            return true
        }) 
        return () =>
        BackHandler.removeEventListener("hardwareBackPress", () => false);
    },[])

    function backButtonClick() {}

    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Make your login
            </Text>
            <Button
                title='LogIn'
                onPress={() => navigation.goBack()}
                color='#5fa'
            />
        </View>
    )
}