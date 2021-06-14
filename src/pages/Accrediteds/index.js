import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text} from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';

export  default function Accrediteds(){
    const navigation = useNavigation();
    const route = useRoute();
    function navigationToMenu(){
        navigation.navigate('Menu', {});
    }

    return(
        <View>
            <View style={styles.NavBarBody}>
            <Icon
                type='font-awesome-5'
                name='angle-left'
                color='#ffffff'
                iconStyle={{ fontSize: 38 }}
                onPress={()=>navigationToMenu()}
            />
            <Text 
                style={styles.NavBarCenter}>
                Alcance Saúde
            </Text>
            <Icon
                type='font-awesome-5'
                name='ellipsis-v' 
                color='#264d76'
                iconStyle={{ fontSize: 33 }}
            />
            </View>
            <Text >Test:</Text>
            
        </View>
    );
}