import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export const globalStyles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        backgroundColor: 'black'
    },
    calcButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        width: 80,
        height: 80,
        borderRadius: 40
    },
    calcText: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    calcDisplayContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    calcDisplayDisplay: {
        fontSize: 70,
        fontWeight: '300',
        color: 'white',
        textAlign: 'right',
        padding: 20
    },
    buttonContainer: {
        paddingBottom: 30,
        padding: 5,
    },
    calcButtonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    calcButtonNull: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 2,
        textAlign: 'left',
        paddingLeft: 20,
    }

});