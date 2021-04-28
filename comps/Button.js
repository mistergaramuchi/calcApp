import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global'

export default class Button extends React.Component {

    static defaultProps = {
        onPress: function () { },
        title: '',
        color: 'white',
        backgroundColor: 'black',
        style: {},
    }

    render() {
        var bc = this.props.backgroundColor;

        return (

            <TouchableOpacity
                onPress={this.props.onPress}
                style={[globalStyles.calcButtonContainer, { backgroundColor: bc }, { ...this.props.style }]}>
                <Text style={[globalStyles.calcText, { color: this.props.color }]}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}