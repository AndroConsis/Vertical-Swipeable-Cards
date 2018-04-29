import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default class Card extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.6,
          shadowRadius: 2,
          elevation: 1,
        }}
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
        <View style={{ flex: 6, backgroundColor: "#F4F4F4", padding: 10 }}>
          <Text style={{ fontSize: 20, color: "#212121" }}>
            Lorem ipsum dolor sit amet, cu saperet volumus ponderum sea, vix cu.
          </Text>
          <Text style={{ color: "gray", paddingTop: 20, letterSpacing: 1 }}>
            Lorem ipsum dolor sit amet, mel accusata incorrupte assueverit te.
            Cu case necessitatibus duo, magna prima repudiandae ne vim, est ea
            veri invidunt. Nec ad aeterno euripidis theophrastus, cu est dicant
            corrumpit. Ad dico imperdiet ullamcorper ius, ea cum nullam
            instructior, ne lorem pericula reprimique mel. In mutat viris
            tamquam vim. Te tale facilis qui. Atqui ignota persecuti et est, ex
            graecis torquatos eos. Sea id dicant mandamus postulant, usu vero
            ludus impedit te. Ei assum postulant per, docendi gubergren
            assentior ei eum, vix prima instructior an. Eam quas justo commune
          </Text>
        </View>
      </View>
    );
  }
}
