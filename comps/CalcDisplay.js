import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global'
import { CalcButton } from './../comps';

export default class CalcDisplay extends React.Component {

    static defaultProps = {
        display: "",
    }

    render() {
        return (
            <View style={globalStyles.calcDisplayContainer}>
                <Text style={globalStyles.calcDisplayDisplay}>{this.props.display}</Text>
            </View>
        )
    }
}

