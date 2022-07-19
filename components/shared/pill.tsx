import React from "react"
import { View, Text } from "react-native"
import { Theme } from "../../theme"

export const Pill = ({ title, value }) => {
    return <View>
        <Text style={{
            alignSelf: 'flex-start',

            marginTop: 8, fontSize: 12, color: Theme.colors.altText
        }}>{title}</Text>
        <Text style={{
            alignSelf: 'flex-start', padding: 4,
            fontSize: 16, color: Theme.colors.defaultText
        }}>{value}</Text>
    </View>

}