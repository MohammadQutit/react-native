import React from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

const { height, width } = Dimensions.get("screen");
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      password: "",
      Phone_Number: "",
    
    };
  }
  set_Password = (text) => {
    this.setState({ password: text });
  };
  set_Phone_number = (text) => {
    this.setState({ Phone_Number: text });
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.Keyboard}
        behavior={Platform.OS === "ios" ? "padding" : null}
        enabled={false}
      >
        <StatusBar style="dark" />

        <ImageBackground style={styles.container} source={require("../4.jpg")}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.view}>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../2.png")}
                  style={{ height: 80, width: 70, marginTop: 20 }}
                />
                <Text style={{ marginTop: 20, fontSize: 30 }}>
                  The Craftsmen
                </Text>
              </View>

              <View
                style={{
                  flex: 2,
                  width: "100%",
                  alignItems: "center",
                  paddingTop: 20,
                }}
              >
                <TextInput
                  style={styles.textinput}
                  placeholder="Phone"
                  keyboardType="phone-pad"
                  placeholderTextColor="black"
                  returnKeyType="next"
                  onSubmitEditing={() => { this.secondTextInput.focus(); }}
                  blurOnSubmit={false}
                  onChangeText={this.set_Phone_number}
                />
                <TextInput
                  style={styles.textinput}
                  placeholder="Password"
                  ref={(input) => { this.secondTextInput = input; }}
                  secureTextEntry={true}
                  returnKeyType="done"
                  placeholderTextColor="black"
                  onChangeText={this.set_Password}
                />

                <TouchableOpacity style={styles.button}>
                  <Text style={{ fontSize: 25, color: "#009788" }}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                  <Text style={{ fontSize: 25, color: "#009788" }}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
    width: "100%",
    height: height,
  },
  textinput: {
    paddingHorizontal: 20,
    marginTop: 15,
    height: 40,
    width: "90%",
    color: "black",
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 20,
  },
  view: {
    height: "95%",
    width: "95%",

    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,151,136,0.8)",
  },
  button: {
    marginTop: 30,
    height: 50,
    width: "90%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  Keyboard: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
