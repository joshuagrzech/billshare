import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SvgUri } from "react-native-svg";
import BillShareLogo from "../images/money.svg";

const styles = StyleSheet.create({
  one: {
    height: "100%",
    width: "100%",
    backgroundColor: "#4EA8FC",

    alignItems: "center",
  },
  two: {
    height: "100%",
    width: "100%",
    backgroundColor: "#4EA8FC",
    justifyContent: "center",
    alignItems: "center",
  },

  //[...]
});

const slides = [
  {
    key: "one",
    title: "Title 1",
    text: "Description.\nSay something cool",

    backgroundColor: "#FFFFFF",
  },
  {
    key: "two",
    title: "Title 2",
    text: "Other cool stuff",

    backgroundColor: "#FFFFFF",
  }
];

export class AppIntro extends React.Component {
  _renderItem = ({ item }) => {
    switch (item.key) {
      case "one":
        return (
          <View style={styles[item.key]}>
            <Text style={{ fontSize: 100, marginTop: 100 }}>BillShare</Text>
            <Image source={item.image} />
            
            <View style={{ justifyContent: "center" }}>
              <Image
                source={require('../images/money.png')}
                style={{margin: 40}}
              />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#79D615",
                borderRadius: 100,
                marginTop: "70%",
              }}
              onPress={this.props.onDone}
            >
              <Button style={{ fontSize: "20px" }} title="Skip To Sign In">
                <Text>Skip To Sign-In</Text>
              </Button>
            </TouchableOpacity>
          </View>
        );
      case "two":
        return (
          <View style={styles[item.key]}>
            <Text style={{ margin: 40, textAlign: "center",fontSize: 30 }}>Take a few moments to tell us about your house.</Text>
            <FontAwesomeIcon size={150} style={{}} icon={faFileInvoiceDollar} />
            <Image source={item.image} />
            <Text style={{ fontSize: 30, margin: 40, textAlign: "center" }}>Have your roomates scan the generated QR code, and start splitting!</Text>
            <View style={{ justifyContent: "center" }}></View>
          </View>
        );
      case "three":
        return (
          <View style={styles[item.key]}>
            <FontAwesomeIcon size={150} style={{}} icon={faFileInvoiceDollar} />
            <Image source={item.image} />
            <Text style={{ fontSize: 30 }}></Text>
            <View style={{ justifyContent: "center" }}></View>
          </View>
        );
    }
    return;
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.props.onDone();
  };

  render() {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={this._renderItem}
        onDone={this._onDone}
      />
    );
  }
}
