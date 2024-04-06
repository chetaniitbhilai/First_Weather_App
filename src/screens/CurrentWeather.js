import React from "react";
import { View,Text,SafeAreaView,StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = ({ weatherData }) => { 
  const {
    wrapper,
    container,
    tempStyles,
    feel,
    highLowWrapper,
    highlow,
    bodyWrapper,
    description,
    message
  }=styles
  // console.log(weatherData)
  const  { main: { temp , feels_like , temp_max , temp_min } , weather } = weatherData

  const weatherCondition = weather[0].main 


  return (
    <SafeAreaView style={[wrapper, { backgroundColor : weatherType[weatherCondition].backgroundColor}]}>
      <View style={container}>
      <Feather name={ weatherType[weatherCondition].icon } size={100} color="white" />
        <Text style={tempStyles}> {temp} </Text>
        <Text style={feel}> {`feels like ${feels_like}`} </Text>
        <RowText 
        Text1={`High: ${temp_max}°`} 
        Text2={` Low: ${temp_min}°`} 
        containerStyles={highLowWrapper}
        message1Style={highlow}
        message2Style={highlow}
        />
      </View>
      <RowText 
        Text1={weather[0].description} 
        Text2={weatherType[weatherCondition].message} 
        containerStyles={bodyWrapper}
        message1Style={description}
        message2Style={message}
      />
      
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
  },
  wrapper: {
    backgroundColor: 'pink',
    flex: 1,
  },
  tempStyles:{
    color: 'black',
    fontSize: 48
  },
  feel:{
    fontSize: 30 
  },
  highlow:{
    fontSize: 20
  },
  highLowWrapper:{
    flexDirection:'row'
  },
  bodyWrapper:{
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft:25,
    marginBottom:40
  },
  description:{
    fontSize:48
  },
  message:{
    fontSize:30
  }
})

export default CurrentWeather