import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';

export  default function Contact(){
    const navigation = useNavigation();
    const route = useRoute();
    function navigationToMenu(){
        navigation.navigate('Menu', {});
    }

    return(
        <View>
            <View style={styles.navBarBody}>
            <Icon
                type='font-awesome-5'
                name='angle-left'
                color='#ffffff'
                iconStyle={{ fontSize: 38 }}
                onPress={()=>navigationToMenu()}
            />
            <Text 
                style={styles.navBarCenter}>
                Alcance Saúde
            </Text>
            <Icon
                type='font-awesome-5'
                name='ellipsis-v' 
                color='#264d76'
                iconStyle={{ fontSize: 33 }}
            />
            </View>
            <ScrollView>
                <View style={styles.cardBody}>
                    <Text style={styles.cardTextName}>João da Silva</Text>
                    <Text style={styles.cardTextPlan}>Plano individual</Text>
                    <Text style={styles.cardTextNumber}>0512 0250 2050</Text>
                    <Text style={styles.cardTextVal}>Validade: 10/2021</Text>
                </View>

            </ScrollView>
        </View>
    );
}