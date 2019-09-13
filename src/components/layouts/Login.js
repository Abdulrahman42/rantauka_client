import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-community/async-storage";
import Icons from "react-native-vector-icons/Ionicons";
import IconsMaterial from "react-native-vector-icons/MaterialCommunityIcons";

import { loginAccount } from "../../api/explore";
import { textColor, primaryColor } from "../../api/constans";
import { isEmail, isValidPassword } from "../../utils/helper";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: {
        email: "",
        password: ""
      },
      showPassword: false,
      validation: {
        email: false,
        password: false
      },
      isLoading: false
    };
  }

  handleChange = (text, state) => {
    this.setState(prevState => ({
      login: {
        ...this.state.login,
        [state]: text
      }
    }));
  };

  validation = (state, value) => {
    let result;
    if (state === "email") {
      result = isEmail(value);
    } else if (state === "password") {
      result = isValidPassword(value);
    }

    if (!result) {
      this.setState({
        validation: {
          ...this.state.validation,
          [state]: true
        }
      });
    } else {
      this.setState({
        validation: {
          ...this.state.validation,
          [state]: false
        }
      });
    }
  };

  handleLogin = async data => {
    this.setState({
      isLoading: true
    });
    try {
      const response = await loginAccount(data);
      if (response) {
        await AsyncStorage.setItem("@token", response.data.token);
        this.props.navigation.navigate("Logged");
      }
    } catch (err) {
      this.setState({
        isLoading: false
      });
      alert(err);
    }
  };

  showPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render() {
    const { replace } = this.props.navigation;
    const { validation, isLoading } = this.state;
    const { email, password } = this.state.login;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1 }}
      >
        <KeyboardAvoidingView
          behavior={"padding"}
          style={styles.container}
          enabled
        >
          <View style={styles.textContainer}>
            <View style={styles.registerContainer}>
              <Icons style={styles.icon} name={"md-rocket"} size={70} />
            </View>
            <TextInput
              style={styles.text}
              placeholder="Email"
              returnKeyType="next"
              keyboardType="default"
              returnKeyType="next"
              onSubmitEditing={() => this.password.focus()}
              onChangeText={text => this.handleChange(text, "email")}
              value={email}
              onBlur={() => this.validation("email", email)}
            />
            {validation.email ? (
              <Text style={styles.error}>Please enter valid email</Text>
            ) : null}
            <View style={styles.password}>
              <TextInput
                style={{ flex: 1, color: textColor }}
                placeholder="Password"
                returnKeyType="next"
                keyboardType="default"
                returnKeyType="go"
                ref={input => {
                  this.password = input;
                }}
                onSubmitEditing={() => this.handleLogin(this.state.login)}
                secureTextEntry={!this.state.showPassword}
                onChangeText={text => this.handleChange(text, "password")}
                value={password}
                onBlur={() => this.validation("password", password)}
              />
              <TouchableOpacity onPress={this.showPassword}>
                <IconsMaterial
                  name={this.state.showPassword ? "eye-off" : "eye"}
                  size={25}
                  style={styles.passwordIcon}
                />
              </TouchableOpacity>
            </View>
            {validation.password ? (
              <Text style={styles.error}>Please enter valid password</Text>
            ) : null}

            {isLoading ? (
              <ActivityIndicator color={primaryColor} size={30} />
            ) : (
              <Button
                style={styles.button}
                mode="contained"
                onPress={() => this.handleLogin(this.state.login)}
              >
                Login
              </Button>
            )}

            <View style={styles.infoContainer}>
              <Text style={styles.info}>
                Don't have an account?{" "}
                <Text onPress={() => replace("Register")} style={styles.signup}>
                  Signup here
                </Text>
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 40,
    marginBottom: 20
  },
  registerContainer: {
    paddingBottom: 20,
    alignItems: "center"
  },
  icon: {
    color: primaryColor
  },
  textContainer: {
    justifyContent: "center"
  },
  infoContainer: {
    alignItems: "center",
    paddingTop: 20
  },
  info: {
    color: "#95a5a6"
  },
  button: {
    borderColor: "#000",
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
    color: "white",
    backgroundColor: "#2980b9"
  },
  text: {
    color: textColor,
    borderColor: "#3498db",
    borderBottomWidth: 0.5,
    marginBottom: 10
  },
  passwordIcon: {
    paddingBottom: 12
  },
  signup: {
    color: "#2980b9"
  },
  password: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#3498db",
    borderBottomWidth: 0.5,
    marginBottom: 10
  },
  error: {
    color: "#eb4d4b",
    marginLeft: 4
  }
});
