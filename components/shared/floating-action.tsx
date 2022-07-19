import { TouchableOpacity, View } from "react-native"
import React from "react"
import Entypo from "react-native-vector-icons/Entypo"
import { Theme } from "../../theme"
import { StyleSheet } from "react-native"

export const FloatingAction = ({ onPress }) => {
    return <TouchableOpacity onPress={onPress}
        style={styles.button} >
        <Entypo name="plus" size={25} color="white" />
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: Theme.colors.accent,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute", //Here is the trick
        bottom: 16,
        right: 16,
        zIndex: 100,
        alignSelf: "flex-end"
    }
})