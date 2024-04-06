import React from "react";
import { View,Text,SafeAreaView,StyleSheet,FlatList,StatusBar,Image,ImageBackground } from "react-native";
import ListItem from "../components/ListItem";



const Empty = () =>(
    <View>
        <Text>Empty</Text>
    </View>
)

const UpcomingWeather = ({weatherData}) => {
    const renderItem = ({item}) => (
        <ListItem
        condition={item.weather[0].main} 
        dt_text={item.dt_text} 
        min={item.main.temp_min} 
        max={item.main.temp_max} 
        />
    )
    const { container, image }=styles
    return(
        
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/upcoming-background.jpg')} style={image}>
            <Text>Upcoming Weather</Text>
            
            <FlatList 
                data={weatherData}
                renderItem={renderItem} 
                keyExtractor={(item) => item.dt_text }
            />
            </ImageBackground>
        </SafeAreaView>
        
        
    )
}

const styles= StyleSheet.create({
    container: {
        flex:1,
        // marginTop: StatusBar.currentHeight || 0,
    },
    image: {
        flex:1,
    }
})

export default UpcomingWeather
