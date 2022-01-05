// importações de libs
import React from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

// importando estilos
import styles from './style'

export default function Home(){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Home screen...
            </Text>
            <Button 
                onPress={() => navigation.navigate('Details',{})}
                title='=> Details'
                color='#50a'
            />
        </View>
    )
}