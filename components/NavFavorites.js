import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const data = [
    {
        id: '123',
        icon: 'home',
        location: "Home",
        destination: "Code Street, London, UK",
    },
    {
        id: '456',
        icon: 'work',
        location: "Work",
        destination: "1211 sixth Ave, New York, NY, USA",
    }
]

const NavFavorites = () => {
  return (
    <View>
      <Text>NavFavorites</Text>
    </View>
  )
}

export default NavFavorites

const styles = StyleSheet.create({})