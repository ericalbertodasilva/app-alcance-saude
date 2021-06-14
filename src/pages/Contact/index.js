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
                <TouchableOpacity 
                style={styles.buttonsBody}
                onPress={() => Linking.openURL('https://www.alcancesaude.com.br/sobre-n%C3%B3s')}
                >
                    <Icon
                    type='font-awesome-5'
                    name='home'
                    color='#029ed7'
                    size={45}
                    iconStyle={styles.buttonsIcon}
                    />
                    <Text style={styles.buttonsText}>Quem somos.</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.buttonsBody}
                onPress={() => Linking.openURL('https://www.alcancesaude.com.br/#RedeCredenciada')}
                >
                    <Icon
                    type='font-awesome-5'
                    name='store-alt'
                    color='#029ed7'
                    size={45}
                    iconStyle={styles.buttonsIcon}
                    />
                    <Text style={styles.buttonsText}>Credenciamento!</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.buttonsBody}
                onPress={() => Linking.openURL('https://www.alcancesaude.com.br/p%C3%A1gina-em-branco')}
                >
                    <Icon
                    type='font-awesome-5'
                    name='hand-holding-medical'
                    color='#029ed7'
                    size={45}
                    iconStyle={styles.buttonsIcon}
                    />
                    <Text style={styles.buttonsText}>Médicos 24 horas!</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.buttonsBody}
                >
                    <Icon
                    type='font-awesome-5'
                    name='whatsapp'
                    color='#029ed7'
                    size={45}
                    iconStyle={styles.buttonsIcon}
                    />
                    <Text style={styles.buttonsText}>WhatsApp</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.buttonsBody}
                onPress={() => Linking.openURL('https://pt-br.facebook.com/')}
                >
                    <Icon
                    type='font-awesome-5'
                    name='facebook'
                    color='#029ed7'
                    size={45}
                    iconStyle={styles.buttonsIcon}
                    />
                    <Text style={styles.buttonsText}>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.buttonsBody}
                onPress={() => Linking.openURL('https://www.instagram.com/')}
                >
                    <Icon
                    type='font-awesome-5'
                    name='instagram'
                    color='#029ed7'
                    size={45}
                    iconStyle={styles.buttonsIcon}
                    />
                    <Text style={styles.buttonsText}>Instagram</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}