require("../lib/swissCalc/swisscalc.lib.format.js");
require("./../lib/swissCalc/swisscalc.lib.operator.js");
require("./../lib/swissCalc/swisscalc.lib.operatorCache.js");
require("./../lib/swissCalc/swisscalc.lib.shuntingYard.js");
require("./../lib/swissCalc/swisscalc.display.numericDisplay.js");
require("./../lib/swissCalc/swisscalc.display.memoryDisplay.js");
require("./../lib/swissCalc/swisscalc.calc.calculator.js");

import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global'
import { CalcButton, CalcDisplay } from './../comps';


export default class CalcScreen extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            display: "0"
        };
        // initializing calculator here
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
                        <CalcButton onPress={this.onClearPress} title='C' color='black' backgroundColor='#A6A6A6' />
                        <CalcButton onPress={this.onPlusMinusPress} title='+/-' color='black' backgroundColor='#A6A6A6' />
                        <CalcButton onPress={() => { this.onUnaryOperatorPress(this.oc.PercentOperator) }} title='%' color='black' backgroundColor='#A6A6A6' />
                        <CalcButton onPress={() => { this.onBinaryOperatorPress(this.oc.DivisionOperator) }} title='/' color='white' backgroundColor='#E19E4C' />
                    </View>
                    <View style={globalStyles.calcButtonRow}>
                        <CalcButton onPress={() => { this.onDigitPress('7') }} title='7' color='white' backgroundColor='#323232' />
                        <CalcButton onPress={() => { this.onDigitPress('8') }} title='8' color='white' backgroundColor='#323232' />
                        <CalcButton onPress={() => { this.onDigitPress('9') }} title='9' color='white' backgroundColor='#323232' />
                        <CalcButton onPress={() => { this.onBinaryOperatorPress(this.oc.MultiplicationOperator) }} title='x' color='white' backgroundColor='#E19E4C' />
                    </View>
                    <View style={globalStyles.calcButtonRow}>
                        <CalcButton onPress={() => { this.onDigitPress('4') }} title='4' color='white' backgroundColor='#323232' />
                        <CalcButton onPress={() => { this.onDigitPress('5') }} title='5' color='white' backgroundColor='#323232' />
                        <CalcButton onPress={() => { this.onDigitPress('6') }} title='6' color='white' backgroundColor='#323232' />
                        <CalcButton onPress={() => { this.onBinaryOperatorPress(this.oc.SubtractionOperator) }} title='-' color='white' backgroundColor='#E19E4C' />
                    </View>
                    <View style={globalStyles.calcButtonRow}>
                        <CalcButton onPress={() => { this.onDigitPress('1') }} title='1' color='white' backgroundColor='#323232' />
                        <CalcButton onPress={() => { this.onDigitPress('2') }} title='2' color='white' backgroundColor='#323232' />
                        <CalcButton onPress={() => { this.onDigitPress('3') }} title='3' color='white' backgroundColor='#323232' />
                        <CalcButton onPress={() => { this.onBinaryOperatorPress(this.oc.AdditionOperator) }} title='+' color='white' backgroundColor='#E19E4C' />
                    </View>
                    <View style={globalStyles.calcButtonRow}>
                        <CalcButton onPress={() => { this.onDigitPress('7') }} title='0' color='white' backgroundColor='#323232' style={{ flex: 2 }} />
                        <CalcButton onPress={() => { this.onDigitPress('.') }} title='.' color='white' backgroundColor='#323232' />
                        <CalcButton onPress={this.onEqualsPress} title='=' color='white' backgroundColor='#E19E4C' />
                    </View>
                </View>
            </View >
        )
    }
}

// export default class CalcScreen extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             display: "0",
//         };

//         // initializing calculator here
//         var oc = global.swisscalc.lib.operatorCache;
//         var calc = new global.swisscalc.calc.calculator();

//         // Calculate: 12 + 45 = 	
//         calc.addDigit("1");
//         calc.addDigit("2");
//         calc.addBinaryOperator(oc.AdditionOperator);
//         calc.addDigit("4");
//         calc.addDigit("5");
//         calc.equalsPressed();
//         console.log(calc.getMainDisplay());	// 57
//         calc.clear();
//     }

//     // when digit pressed
//     onDigitPress = (digit) => {
//         this.calc.addDigit(digit);
//         // console.log(this.calc.getMainDisplay)
//         // this.setState({ display: calc.getMainDisplay() });
//     }

//     render() {
//         return (
//             <View style={globalStyles.mainScreen}>
//                 <View style={globalStyles.calcDisplayContainer}>
//                     <CalcDisplay display={this.state.display} />
//                 </View>

//                 <View style={globalStyles.buttonContainer}>
//                     <View style={globalStyles.calcButtonRow}>
//                         <CalcButton title='C' color='black' backgroundColor='#A6A6A6' />
//                         <CalcButton title='+/-' color='black' backgroundColor='#A6A6A6' />
//                         <CalcButton title='%' color='black' backgroundColor='#A6A6A6' />
//                         <CalcButton title='/' color='white' backgroundColor='#E19E4C' />
//                     </View>
//                     <View style={globalStyles.calcButtonRow}>
//                         <CalcButton onPress={() => { this.onDigitPress('7') }} title='7' color='white' backgroundColor='#323232' />
//                         <CalcButton title='8' color='white' backgroundColor='#323232' />
//                         <CalcButton title='9' color='white' backgroundColor='#323232' />
//                         <CalcButton title='x' color='white' backgroundColor='#E19E4C' />
//                     </View>
//                     <View style={globalStyles.calcButtonRow}>
//                         <CalcButton title='4' color='white' backgroundColor='#323232' />
//                         <CalcButton title='5' color='white' backgroundColor='#323232' />
//                         <CalcButton title='6' color='white' backgroundColor='#323232' />
//                         <CalcButton title='-' color='white' backgroundColor='#E19E4C' />
//                     </View>
//                     <View style={globalStyles.calcButtonRow}>
//                         <CalcButton title='1' color='white' backgroundColor='#323232' />
//                         <CalcButton title='2' color='white' backgroundColor='#323232' />
//                         <CalcButton title='3' color='white' backgroundColor='#323232' />
//                         <CalcButton title='+' color='white' backgroundColor='#E19E4C' />
//                     </View>
//                     <View style={globalStyles.calcButtonRow}>
//                         <CalcButton title='0' color='white' backgroundColor='#323232' style={{ flex: 2 }} />
//                         <CalcButton title='.' color='white' backgroundColor='#323232' />
//                         <CalcButton title='=' color='white' backgroundColor='#E19E4C' />
//                     </View>

//                 </View>

//             </View >
//         )
//     }
// }