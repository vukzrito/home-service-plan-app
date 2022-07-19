import React from 'react';
import Icon from "react-native-vector-icons/AntDesign"
import { Theme } from "../../theme"
import { View, Text, TouchableOpacity } from 'react-native';

export const Header = ({ title, onBackPress }) => {

    return <View style={{ flexDirection: 'row', padding: 8, backgroundColor: Theme.colors.primary }}>

        {
            onBackPress != null ? <TouchableOpacity style={{ padding: 8 }}>
                <Icon name="arrowleft" color="white" size={30} />
            </TouchableOpacity> : null
        }

        <Text style={{ color: 'white', fontSize: 20, textAlignVertical: 'center' }}>{title}</Text>
    </View>
}