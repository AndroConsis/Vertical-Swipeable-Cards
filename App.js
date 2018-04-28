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

const { width, height } = Dimensions.get("screen");

export default class App extends Component {
  state = {
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    currentSelectedIndex: 0,
    pan: new Animated.ValueXY(),
    translateY: new Animated.Value(0)
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
          return <SwipeableCard key={k}/>;
        })}
      </View>
    );
  }
}

class SwipeableCard extends Component {
  translateY = new Animated.Value(0);

  _panResponder = PanResponder.create({
    onMoveShouldSetResponderCapture: () => true,
    onMoveShouldSetPanResponderCapture: () => true,

    onPanResponderMove: Animated.event([
      null,
      {
        dy: this.translateY
      }
    ]),

    onPanResponderRelease: (e, { vy, dy }) => {
      const screenHeight = Dimensions.get("window").height;

      if (Math.abs(vy) >= 0.5 || Math.abs(dy) >= 0.5 * screenHeight) {
        Animated.timing(this.translateY, {
          toValue: dy > 0 ? screenHeight : -screenHeight,
          duration: 200
        }).start(this.props.onDismiss);
      } else {
        Animated.spring(this.translateY, {
          toValue: 0,
          bounciness: 0
        }).start();
      }
    }
  });

  render() {
    return (
      <Animated.View
        style={[
          {
            transform: [{ translateY: this.translateY }]
          },
          styles.animatedCardStyle
        ]}
        {...this._panResponder.panHandlers}
      >
        <View style={{ flex: 4, backgroundColor: "lightgray" }}>
          <Image
            style={{ flex: 1, height: undefined, width: undefined }}
            resizeMode="cover"
            source={{
              uri:
                "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            }}
          />
        </View>
        <View style={{ flex: 6, backgroundColor: "#F4f4f4", padding: 10 }}>
          <Text style={{ fontSize: 20, color: "#242424" }}>
            Lorem ipsum dolor sit amet, cu saperet volumus ponderum sea, vix cu.
          </Text>
          <Text style={{ color: "#292929", paddingTop: 20 }}>
            Lorem ipsum dolor sit amet, mel accusata incorrupte assueverit te.
            Cu case necessitatibus duo, magna prima repudiandae ne vim, est ea
            veri invidunt. Nec ad aeterno euripidis theophrastus, cu est dicant
            corrumpit. Ad dico imperdiet ullamcorper ius, ea cum nullam
            instructior, ne lorem pericula reprimique mel. In mutat viris
            tamquam vim. Te tale facilis qui. Atqui ignota persecuti et est, ex
            graecis torquatos eos. Sea id dicant mandamus postulant, usu vero
            ludus impedit te. Ei assum postulant per, docendi gubergren
            assentior ei eum, vix prima instructior an. Eam quas justo commune
            cu, eos ad porro maiorum molestie. Pri te utinam vituperata. Cu
            sonet labitur vix, eos possim ceteros ut.
          </Text>
        </View>
      </Animated.View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  animatedCardStyle: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    ...StyleSheet.absoluteFillObject
  }
};
