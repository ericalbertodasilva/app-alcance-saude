import React, { Component } from 'react';
import {  View, ScrollView, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem from './CarouselCardItem';
import data from './data';


export default class App extends Component {
  render(){
    const sizeAvg = Math.round(Dimensions.get('window').width*0.125);

    return (
      <View style={styles.body}>
        <View style={stylesNavBar.body}>
          <Icon
            style={stylesNavBar.left}
            type='font-awesome-5'
            name='angle-left'
            color='#ffffff'
            iconStyle={{ fontSize: 38 }}
            onPress={() => alert('Voltar')} />
          <Text 
            style={stylesNavBar.center}>
            Alcance Saúde
          </Text>
          <Icon
            style={stylesNavBar.right}
            type='font-awesome-5'
            name='ellipsis-v' 
            color='#ffffff'
            iconStyle={{ fontSize: 33 }}
            onPress={() => alert('Menu')} />
        </View>
        <View>
          <Carousel
            layout='default'
            ref={(c) => { this._carousel = c; }}
            data={data}
            renderItem={CarouselCardItem}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width}
            inactiveSlideShift={0}
            useScrollView={true}
            onSnapToItem={(index) => this.setState({ activeSlide: index }) }
          />
          <Pagination
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
            />

        </View>
        <View style={stylesButtons.body}>
          <TouchableOpacity style={stylesButtons.button}>
            <Icon
              type='font-awesome-5'
              name='globe'
              color='#029ed7'
              iconStyle={{ fontSize: sizeAvg }}
              onPress={() => alert('Voltar')} />
            <Text style={stylesButtons.text}>Site alcance Saúde</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesButtons.button}>
            <Icon
                type='font-awesome-5'
                name='address-book'
                color='#029ed7'
                iconStyle={{ fontSize: sizeAvg }}
                onPress={() => alert('Voltar')} />
            <Text style={stylesButtons.text}>Fala com a gente</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesButtons.button}>
            <Icon
              type='font-awesome-5'
              name='id-card'
              color='#029ed7'
              iconStyle={{ fontSize: sizeAvg }}
              onPress={() => alert('Voltar')} />
            <Text style={stylesButtons.text}>Cartão associado</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesButtons.button}>
            <Icon
              type='font-awesome-5'
              name='edit'
              color='#029ed7'
              iconStyle={{ fontSize: sizeAvg }}
              onPress={() => alert('Voltar')} />
            <Text style={stylesButtons.text}>Deixe a sua mensagem</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  body: {
  },
  container: {
  },
});

const stylesNavBar = StyleSheet.create({
  body: {
    marginTop: 25,
    backgroundColor: '#264d76',
    alignContent: 'flex-start',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingTop: 8,
    paddingBottom: 8,
    paddingStart:8,
    paddingEnd: 10
  },
  left: {
  },
  center: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 30,    
  },
  right: {
  },
});

const stylesButtons = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
    flexWrap: "wrap",
    flexDirection:'row',
    justifyContent:'space-between',
  },
  button: {

    backgroundColor: "#ffffff",
    borderColor:'#029ed7',
    borderWidth:2,
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginVertical: "1%",
    width: "48%",
    minHeight: "35%",
    justifyContent:'center'
  },
  text:{
    textAlign: "center",
    fontSize: 20,
    justifyContent: "center",
    color: '#029ed7',
    
  }
});

