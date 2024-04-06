import React,{ useState, useEffect } from "react"
import { ActivityIndicator,StyleSheet,View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Tabs from "./src/components/Tabs"
import { useGetWeather } from "./src/hooks/useGetWeather"

const Tab = createBottomTabNavigator()

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading,error,weather]=useGetWeather()
  console.log(loading,error,weather)

  /*{"coords": {"accuracy": 100, "altitude": 253.79998779296875, "altitudeAccuracy": 100, "heading": 0, "latitude": 21.2439227, "longitude": 81.319878, "speed": 0}, "mocked": false, "timestamp": 1712292761516}*/
  if (weather && weather.list) {
    return(
      <NavigationContainer>
        <Tabs weather={weather}/>
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'blue'}/>
    </View>
  )
} 

const styles=StyleSheet.create({
  container:{
    justifyContent:'center',
    flex : 1
  }
})

export default App

