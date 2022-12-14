import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux'
import { setOrigin, setDestination } from '../slices/navSlice'
import NavFavorites from '../components/NavFavorites'

const HomeScreen = () => {    
    const dispatch = useDispatch() // dispatch communicates data to and fro redux
  return (

 

    <SafeAreaView style={tw `bg-white h-full `} >
     <View style={tw `p-5`}>
        <Image 
        style={{
            width: 100, 
            height: 100, 
            resizeMode: 'contain'
        }}
        
        source={{
            uri: 'https://links.papareact.com/gzs'
        }}
        
        />

        <GooglePlacesAutocomplete 
        placeholder='Where From?'
        styles={{
            container: {
                flex: 0,
            },
            textInput: {
                fontSize: 24,
            },

        }}
        onPress={(data, details = null) => {
           dispatch(
            setOrigin({
            location: details.geometry.location,
            description: data.description,
           })
           )

           dispatch(setDestination(null));
        }}
        fetchDetails={true}
        returnKeyType={"search"}
        enablePoweredByContainer={false}
        minLength={2}
        query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400} //waits to execute search for 400 miliseconds
      
        />

        <NavOptions />
        <NavFavorites />
        
     </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({ 
    text: {
        color: 'blue',
    }
})