import React, { Component, setState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text,  Dimensions, Image, TouchableOpacity, Linking } from 'react-native';
import { Icon } from 'react-native-elements';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem from './CarouselCardItem';
import data from './data';

import styles from './styles'; 

export  default function Menu(){
    const navigation = useNavigation();
    const route = useRoute();
    const sizeAvg = Math.round(Dimensions.get('window').width*0.125);
    
    function navigationToLogin(){
      navigation.navigate('Login', {});
    }
    function navigationToContact(){
      navigation.navigate('Contact', {});
    }
    function navigationToAccrediteds(){
      navigation.navigate('Accrediteds', {});
    }
    function navigationToMenu(){
      navigation.navigate('Menu', {});
  }

    return(
      <View>
        <View style={styles.NavBarBody}>
          <Icon
            type='font-awesome-5'
            name='angle-left'
            color='#264d76'
            iconStyle={{ fontSize: 38 }}
          />
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.alcancesaude.com.br/')}
          >
            <Text 
              style={styles.NavBarCenter}
            >
              Alcance Saúde
            </Text>
          </TouchableOpacity >
          <Icon
            type='font-awesome-5'
            name='ellipsis-v' 
            color='#264d76'
            iconStyle={{ fontSize: 33 }}
            
          />
        </View>

        <View>
          <Carousel
            layout='default'
            //ref={(c) => { this._carousel = c; }}
            data={data}
            renderItem={CarouselCardItem}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width}
            inactiveSlideShift={0}
            useScrollView={true}
            //onSnapToItem={(index) => this.setState({ activeSlide: index }) }
          />
          {/* <Pagination
              dotsLength={3}
              activeDotIndex={0}
              containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  
                  backgroundColor: 'rgba(255, 255, 255, 0.92)'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            /> */}
        </View>

        <View style={styles.ButtonsBody}>
          <TouchableOpacity 
            style={styles.ButtonsButton}
            onPress={() => Linking.openURL('https://www.alcancesaude.com.br/')}
          >
            <Icon
              type='font-awesome-5'
              name='globe'
              color='#029ed7'
              iconStyle={{ fontSize: sizeAvg }} 
              />
            <Text style={styles.ButtonsText}>Site alcance Saúde</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.ButtonsButton}
            onPress={()=>navigationToContact()}
          >
            <Icon
                type='font-awesome-5'
                name='address-book'
                color='#029ed7'
                iconStyle={{ fontSize: sizeAvg }}
                />
            <Text style={styles.ButtonsText}>Fale com a gente</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.ButtonsButton}
            onPress={()=>navigationToLogin()}
          >
            <Icon
              type='font-awesome-5'
              name='id-card'
              color='#029ed7'
              iconStyle={{ fontSize: sizeAvg }}
              />
            <Text style={styles.ButtonsText}>Cartão associado</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.ButtonsButton}
            onPress={()=>navigationToAccrediteds()}
          >
            <Icon
              type='font-awesome-5'
              name='store-alt'
              color='#029ed7'
              iconStyle={{ fontSize: sizeAvg }}
              />
            <Text style={styles.ButtonsText}>Credenciados</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}