import React from "react";
import { View , Text} from "react-native"

export const SuperScript = ({base, exponent}) => {
    return <View style={{flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
        <View style={{alignItems: 'flex-end'}}>
            <Text style={{fontSize: 16, color:'black'}}>{base}</Text>
        </View>
        <View style={{alignItems: 'flex-start'}}>
            <Text style={{fontSize: 10,color:'black'}}>{exponent}</Text>
        </View>
    </View>
}