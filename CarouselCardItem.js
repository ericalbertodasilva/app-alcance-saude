import React from 'react'
import { View, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: SLIDER_WIDTH,
  },
  image: {
    width: '100%',
    height: 200,
  },


})

export default CarouselCardItem