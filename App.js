/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
  TouchableOpacity,
  PanResponder,
  Image
} from "react-native";

import SwipeableCard from "./SwipeableCard";

export default class App extends Component {
  state = {
    data: [1, 2]
  };

  getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.data.map((i, k) => {
          return <SwipeableCard key={k} index={i} />;
        })}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "black"
  }
};
