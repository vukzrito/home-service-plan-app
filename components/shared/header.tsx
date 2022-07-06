import React from 'react';
import Icon from "react-native-vector-icons/AntDesign"
import { Theme } from "../../theme"
import { View, Text } from 'react-native';

export const Header = ({ title }) => {
    return <View style={{ flexDirection: 'row', padding: 16, backgroundColor: Theme.colors.primary }}>
        <Icon name="arrowleft" color="white" size={30} />
        <Text style={{ color: 'white', fontSize: 20, textAlignVertical:'center' }}>{title}</Text>
    </View>
}