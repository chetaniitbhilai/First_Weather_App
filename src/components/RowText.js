import React from "react";
import { Text, View } from "react-native";

const RowText=(props)=>{
    const {Text1,Text2,containerStyles,message1Style,message2Style}=props
    return(
        <View style={containerStyles}>
            <Text style={message1Style}>
                {Text1}
            </Text>
            <Text style={message2Style}>
                {Text2}
            </Text>
        </View>
    )
}

export default RowText