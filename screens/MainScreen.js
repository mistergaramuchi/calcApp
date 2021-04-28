require("../lib/swissCalc/swisscalc.lib.format.js");
require("../lib/swissCalc/swisscalc.lib.operator.js");
require("../lib/swissCalc/swisscalc.lib.operatorCache.js");
require("../lib/swissCalc/swisscalc.lib.shuntingYard.js");
require("../lib/swissCalc/swisscalc.display.numericDisplay.js");
require("../lib/swissCalc/swisscalc.display.memoryDisplay.js");
require("../lib/swissCalc/swisscalc.calc.calculator.js");

import React from 'react';
import { View } from 'react-native';
import { globalStyles } from '../styles/global'
import { Button, CalcDisplay } from '../comps';

export default class MainScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            display: "0",
        };
        // initialize calculator
        this.oc = global.swisscalc.lib.operatorCache;
        this.calc = new global.swisscalc.calc.calculator();
    }

    // when digit pressed
    onDigitPress = (digit) => {
        this.calc.addDigit(digit);
        this.setState({ display: this.calc.getMainDisplay() });
    }

    // when C is pressed
    onClearPress = () => {
        this.calc.clear();
        this.setState({ display: this.calc.getMainDisplay() });
    }

    // when +- is pressed
    onPlusMinusPress = () => {
        this.calc.negate();
        this.setState({ display: this.calc.getMainDisplay() });
    }

    // when binary op is pressed
    onBinaryOperatorPress = (operator) => {
        this.calc.addBinaryOperator(operator);
        this.setState({ display: this.calc.getMainDisplay() });
    }

    // % press
    onUnaryOperatorPress = (operator) => {
        this.calc.addUnaryOperator(operator);
        this.setState({ display: this.calc.getMainDisplay() });
    }

    // when = is presssed
    onEqualsPress = () => {
        this.calc.equalsPressed();
        this.setState({ display: this.calc.getMainDisplay() });
    }

    render() {

        return (
            <View style={globalStyles.mainScreen} >
                <View style={globalStyles.calcDisplayContainer}>
                    <CalcDisplay display={this.state.display} />
                </View>

                <View style={globalStyles.buttonContainer}>
                    <View style={globalStyles.calcButtonRow}>
                        <Button onPress={this.onClearPress} title='AC' color='black' backgroundColor='#A6A6A6' />
                        <Button onPress={this.onPlusMinusPress} title='⁺∕₋' color='black' backgroundColor='#A6A6A6' />
                        <Button onPress={() => { this.onUnaryOperatorPress(this.oc.PercentOperator) }} title='%' color='black' backgroundColor='#A6A6A6' />
                        <Button onPress={() => { this.onBinaryOperatorPress(this.oc.DivisionOperator) }} title='÷' color='white' backgroundColor='#E19E4C' />
                    </View>
                    <View style={globalStyles.calcButtonRow}>
                        <Button onPress={() => { this.onDigitPress('7') }} title='7' color='white' backgroundColor='#323232' />
                        <Button onPress={() => { this.onDigitPress('8') }} title='8' color='white' backgroundColor='#323232' />
                        <Button onPress={() => { this.onDigitPress('9') }} title='9' color='white' backgroundColor='#323232' />
                        <Button onPress={() => { this.onBinaryOperatorPress(this.oc.MultiplicationOperator) }} title='X' color='white' backgroundColor='#E19E4C' />
                    </View>
                    <View style={globalStyles.calcButtonRow}>
                        <Button onPress={() => { this.onDigitPress('4') }} title='4' color='white' backgroundColor='#323232' />
                        <Button onPress={() => { this.onDigitPress('5') }} title='5' color='white' backgroundColor='#323232' />
                        <Button onPress={() => { this.onDigitPress('6') }} title='6' color='white' backgroundColor='#323232' />
                        <Button onPress={() => { this.onBinaryOperatorPress(this.oc.SubtractionOperator) }} title='-' color='white' backgroundColor='#E19E4C' />
                    </View>
                    <View style={globalStyles.calcButtonRow}>
                        <Button onPress={() => { this.onDigitPress('1') }} title='1' color='white' backgroundColor='#323232' />
                        <Button onPress={() => { this.onDigitPress('2') }} title='2' color='white' backgroundColor='#323232' />
                        <Button onPress={() => { this.onDigitPress('3') }} title='3' color='white' backgroundColor='#323232' />
                        <Button onPress={() => { this.onBinaryOperatorPress(this.oc.AdditionOperator) }} title='+' color='white' backgroundColor='#E19E4C' />
                    </View>
                    <View style={globalStyles.calcButtonRow}>
                        <Button style={globalStyles.calcButtonNull} onPress={() => { this.onDigitPress('0') }} title='0' color='white' backgroundColor='#323232' />
                        <Button onPress={() => { this.onDigitPress('.') }} title=',' color='white' backgroundColor='#323232' />
                        <Button onPress={this.onEqualsPress} title='=' color='white' backgroundColor='#E19E4C' />
                    </View>
                </View>
            </View >
        )
    }
}
