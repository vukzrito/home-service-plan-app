import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import { Theme } from "../../theme"
import { Header } from "../shared/header"
export const Inspection = () => {
    return <View>
        <Header title="Lorem Ipsum Property" />
        <View>
            <Text style={styles.heading}>Address</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'black', flex: 1 }}> 361 9th Road</Text>
                <TouchableOpacity>
                    <MaterialIcon name='directions' size={30} color={Theme.colors.accent} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    heading: {
        fontWeight: 'bold',
        color: Theme.colors.accent
    }
})