import React from "react"
import { View, TextInput, TouchableOpacity } from "react-native"
import { Header } from "../shared/header"

export const AddFixture = ({ navigation }) => {
    return <View>
        <Header title="Add Fixture" onBackPress={() => navigation.goBack()} />
        <TextInput ></TextInput>
    </View>
}