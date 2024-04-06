import React from "react";
import { SafeAreaView,Text,StyleSheet,View,ImageBackground,StatusBar } from "react-native";
import IconText from "../components/IconText";
import moment from "moment";

const City = ({weatherData}) => {
    const {container,CityName,image,cityText,Country,populationText,populationWrapper,riseSetWrapper,riseSetText,rowLayout }=styles
    const { name, country, population , sunrise,sunset} = weatherData
    return (
        <SafeAreaView style={container}>
            <ImageBackground 
            source={require('../../assets/back5.jpg')} 
            style={image}
            >
                <Text style={[CityName,cityText]}>{name}</Text>
                <Text style={[Country,cityText]}>{country}</Text>
                <View style={[populationWrapper,rowLayout]}>
                    <IconText 
                    iconName={'user'} 
                    iconColor={'red'} 
                    bodyText={`Population : ${population}`} 
                    bodyTextStyles={ populationText } 
                    />
                    
                </View>
                <View style={[riseSetWrapper,rowLayout]}>
                <IconText 
                    iconName={'sunrise'} 
                    iconColor={'yellow'} 
                    bodyText={moment(sunrise).format('h:mm:ss a')} 
                    bodyTextStyles={ riseSetText } 
                    />
                <IconText 
                    iconName={'sunset'} 
                    iconColor={'yellow'} 
                    bodyText={moment(sunset).format('h:mm:ss a')} 
                    bodyTextStyles={ riseSetText } 
                />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        // marginTop: StatusBar.currentHeight || 0
    },
    image: {
        flex:1
    },
    CityName:{
        fontSize: 40,
    },
    Country:{
        fontSize: 30,
    },
    populationWrapper:{
        justifyContent:'center',
        marginTop:30,
    },
    populationText : {
        fontSize:25,
        marginLeft: 7.5,
        color:'blue',
    },
    cityText:{
        alignContent: 'center',
        alignSelf: 'center',
        fontWeight:'bold',
        color: 'white'
    },
    riseSetWrapper:{
        justifyContent:'space-around',
        marginTop:30
    },
    riseSetText:{
        fontSize:20,
        color:'white',
    },
    rowLayout:{
        flexDirection:'row',
        alignItems:'center'
    }
})

export default City