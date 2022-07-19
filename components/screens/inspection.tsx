import React, { useEffect } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import { Theme } from "../../theme"
import { Header } from "../shared/header"
import { Pill } from "../shared/pill"
import { SuperScript } from "../shared/super-script"

export const Inspection = props => {
    useEffect(() => {
        console.log(props)
        props.navigation.getParent()?.setOptions({
            title: ' San Ridge Village',
        });
    }, [])
    return <View>
        <View style={styles.container}>

            <Text style={styles.heading}>Address</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'black', flex: 1 }}> 361 9th Road</Text>
                <TouchableOpacity>
                    <MaterialIcon name='directions' size={30} color={Theme.colors.accent} />
                </TouchableOpacity>
            </View>
            <Text style={styles.heading}>Property Info</Text>
            <View>
                <Pill title="Floor Area" value="100m2" />
                <Pill title="Estate" value="San Ridge Village" />
                <Pill title="Suburb" value="Carlswald" />
                <Pill title="City" value="Midrand" />

            </View>
            {/* <Text style={styles.heading}>Occupants</Text>
            <View>
                <Text style={{ color: 'black'}}> 361 9th Road</Text>

            </View> */}

        </View>
    </View>
}

const styles = StyleSheet.create({
    container: { padding: 16, backgroundColor: Theme.colors.background },
    heading: {
        fontWeight: 'bold',
        color: Theme.colors.accent
    }, text: {
        color: 'black'
    }
})