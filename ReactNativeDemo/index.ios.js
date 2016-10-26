/**
 * React Native Demo
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
} from 'react-native';


class Square extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.square} onPress={() => this.props.onPress()}>
        <Text style={styles.squareText}>{this.props.value}</Text>
      </TouchableHighlight>
    );
  }
}

class Board extends Component {
  constructor() {
    super();
  }

  /* press handler that is passed to new squares by renderSquare */
  handlePress(i) {/*TODO*/}

  /* render a new square with a press handler */
  renderSquare(i) {
    return (<Square value={null} onPress={() => this.handlePress(i)}/>);
  }

  render() {
    return (
      <View style={styles.board}>
        <View style={styles.row}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </View>
        <View style={styles.row}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </View>
        <View style={styles.row}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </View>
      </View>
    );
  }
}

export default class ReactNativeDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Demo!
        </Text>
        <View style={{height: 50}} />
        <Board />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  board: {
    height: 300,
    width: 300,
  },
  row: {
    flexDirection: 'row',
    height: 100,
  },
  square: {
    flex: 1,
    borderWidth: 3,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareText:{
    fontSize: 70,
    fontWeight: 'bold',
  }
});

AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo);
