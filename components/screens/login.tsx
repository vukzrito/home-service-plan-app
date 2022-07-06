import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Theme } from '../../theme';

export const Login = () => {

    return <View style={{ flex: 1, backgroundColor: '#e3e3e3' }}>
        <View style={{ flex: 1, backgroundColor: Theme.colors.primary, }}>
            <Text>Login</Text>
        </View>
        <View style={{ flex: 1 }}>
            <View style={{ padding: 16, borderRadius: 8, backgroundColor: '#fff', marginHorizontal: 32, marginTop: -120 }}>
                <TextInput placeholder='Username' style={styles.textInput}></TextInput>
                <TextInput placeholder='Password' style={styles.textInput}></TextInput>
                <TouchableOpacity style={{ borderRadius: 8, backgroundColor: Theme.colors.accent, padding: 8, margin: 8 }}>
                    <Text style={{ color: '#fff', textAlign: 'center' }}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    textInput: {
        borderColor: '#333',
        borderWidth: 0.5,
        margin: 8,
        borderRadius: 8
    }
})