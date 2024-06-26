import React from "react"
import {View,Text,StyleSheet } from 'react-native'
import { Feather } from "@expo/vector-icons"
import { weatherType } from "../utilities/weatherType"
import moment from "moment"

const ListItem = (props) => {
    const {dt_text,min,max,condition} = props
    const {temp,text,item,dateTimeWrapper} = styles
    return(
        <View style={item}>
            <Feather name={weatherType[condition].icon} size={50} color={'white'} />
            <View style={dateTimeWrapper}>
                <Text style={text}>{moment(dt_text).format('dddd')}</Text>
                <Text style={text}>{moment(dt_text).format('h:mm:ss a')}</Text>
            </View>
            <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
        </View>

    )
}

const styles=StyleSheet.create({
    item: {
        padding:20,
        marginHorizontal:16,
        marginVertical:8,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderWidth:5,
        backgroundColor:'pink'
    },
    dateTimeWrapper:{
        flexDirection:'column'
    },
    temp: { 
        color:'white',
        fontSize:20
    },
    text: {
        color:'blue',
        fontSize:15
    },
})

export default ListItem