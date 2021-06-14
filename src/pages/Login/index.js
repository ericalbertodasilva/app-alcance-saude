import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity , Image, SafeAreaView, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import 'react-native-gesture-handler';

import styles from './styles';
import logoImg from '../../assents/logo.png';

export  default function Contact(){
    const navigation = useNavigation();
    const route = useRoute();
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);

    function navigationToMenu(){
        navigation.navigate('Menu', {});
    }
    function navigationToCard(){
        navigation.navigate('Card', {});
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
            <View style={styles.loginBody}>
                <Image source={logoImg} />
                <SafeAreaView>
                    <Image
                        style={styles.loginImage}
                        source={{
                        uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                        }}
                    />
                    <TextInput
                        style={styles.loginTextInput}
                        onChangeText={onChangeText}
                        placeholder="   E-mail"
                        value={text}
                    />
                    <TextInput
                        style={styles.loginTextInput}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="   CPF"
                        keyboardType="numeric"
                    />
                    <TouchableOpacity 
                        onPress={()=>navigationToCard()}
                        style={styles.loginButton}
                    >
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        </View>
    );
}