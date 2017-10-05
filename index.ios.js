/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, Text, View, Image } from 'react-native';

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};
    }

    render() {
        let display = this.state.showText ? this.props.text + ' ' + this.props.name : '';
        return (
            <Text>Greeting: {display}</Text>
        );
    }
}

class BlinkGreeting extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText}
            });
        }, 2000);
    }

    render() {
        let display = this.state.showText ? this.props.text + ' ' + this.props.name : '';
        return (
            <Text>BlinkGreeting: {display}</Text>
        );
    }
}

// default class Greetings extends Component {
//     render() {
//         return ( //
//             <View style={{flex:1}}/>
//             <BlinkGreeting style={{width: 50, height: 50, backgroundColor: 'powderblue'}} name='Component1' text='loving reactnative1'/>
//             <BlinkGreeting style={styles.blueLarge} name='Component2' text='loving aoeu'>Sample Large Blue Text</BlinkGreeting>
//         <Greeting style={styles.blueLarge}>Sample Large Blue Text</Greeting>
//         <Text style={styles.blueLarge, {width: 150, height: 150, backgroundColor: 'skyblue'}}>Sample Large Blue Text</Text>
//         <Text style={{flex:2}}}>Sample Red Normal Text</Text>
//     <Text style={{flex:2}, styles.redNormal, {width: 100, height: 100, backgroundColor: 'steelblue'}}>Sample Red Normal Text</Text>
//         <Text style={[styles.blueLarge, styles.redNormal], {width: 50, height: 50, backgroundColor: 'powderblue'}} name='Component3'>aoeuaoeu</Text>
//         </View>
//     );
//     }
// }

export default class FlexGreeting extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
        <View style={{
            flex:1,
            flexDirection:'column',
            justifyContent:'space-between',
            padding:20
        }}>
            <View style={{flex:3, backgroundColor: 'powderblue'}}>
                <TextInput
                    placeholder="Type here"
                    onChangeText={
                        (text) => this.setState({text})
                    }
                />
            </View>
            <View style={{flex:1, backgroundColor: 'skyblue'}}>
                <Text style={{padding:10}}>
                    {
                        this.state.text.split(' ').map(
                            (word) => word && '🍕'
                        ).join(' ')
                    }
                </Text>
            </View>
            <View style={{flex:2, backgroundColor: 'steelblue'}}>
            </View>
        </View>
    );
    }
}

// class Bananas extends Component {
//     render() {
//         let pic = {
//             uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//         };
//         return (
//             <Image source={pic} style={{width: 193, height: 110}}/>
//         );
//     }
// }

// skip this line if using Create React Native App
AppRegistry.registerComponent('TWTSample1004', () => FlexGreeting);

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// export default class TWTSample1004 extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// AppRegistry.registerComponent('TWTSample1004', () => FlexGreeting);


const styles = StyleSheet.create({
    blueLarge: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    redNormal: {
        color: 'red',
        fontSize: 18,
    },
});
