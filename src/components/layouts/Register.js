import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { Button } from "react-native-paper";
import { Text } from "react-native-paper";
import Icons from "react-native-vector-icons/Ionicons";
import IconsMaterial from "react-native-vector-icons/MaterialCommunityIcons";

import { signupAccount } from "../../api/explore";
import {
  isEmail,
  isValidPassword,
  isValidPhone,
  isName
} from "../../utils/helper";
import { textColor, primaryColor } from "../../api/constans";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      signup: {
        fullName: "",
        telephone: "",
        email: "",
        password: ""
      },
      validation: {
        email: false,
        telephone: false,
        password: false,
        fullName: false
      },
      showPassword: false,
      isLoading: false
    };
  }

  handleChange = (text, name) => {
    this.setState({
      signup: {
        ...this.state.signup,
        [name]: text
      }
    });
  };

  validation = (state, value) => {
    let result;
    if (state === "email") {
      result = isEmail(value);
    } else if (state === "password") {
      result = isValidPassword(value);
    } else if (state === "telephone") {
      result = isValidPhone(value);
    } else if (state === "fullName") {
      result = isName(value);
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

  onSignup = async state => {
    const { fullName, telephone, password, email } = this.state.signup;
    this.setState({
      isLoading: true
    });
    if (!fullName) {
      this.validation("fullName", fullName);
    } else if (!telephone) {
      this.validation("telephone", telephone);
    } else if (!email) {
      this.validation("email", email);
    } else if (!password) {
      this.validation("password", password);
    } else {
      try {
        const { replace } = this.props.navigation;
        const response = await signupAccount(state);
        if (response) {
          replace("Login");
        }
      } catch (err) {
        this.setState({
          isLoading: false
        });
        alert("err");
      }
    }
  };

  showPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render() {
    const { replace } = this.props.navigation;
    const { validation, isLoading } = this.state;
    const { fullName, telephone, email, password } = this.state.signup;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={"padding"}
          enabled
        >
          <View style={styles.formContainer}>
            <View style={styles.registerContainer}>
              <Icons style={styles.icon} name={"md-rocket"} size={70} />
            </View>
            <TextInput
              style={styles.text}
              placeholder="Nama Lengkap"
              returnKeyType="next"
              keyboardType="default"
              returnKeyType="next"
              onSubmitEditing={() => this.telephone.focus()}
              onChangeText={text => this.handleChange(text, "fullName")}
              value={fullName}
              onBlur={() => this.validation("fullName", fullName)}
            />
            {validation.fullName ? (
              <Text style={styles.error}>Invalid name</Text>
            ) : null}

            <TextInput
              style={styles.text}
              placeholder="Telephone"
              returnKeyType="next"
              keyboardType="number-pad"
              returnKeyType="next"
              ref={input => {
                this.telephone = input;
              }}
              onSubmitEditing={() => this.email.focus()}
              onChangeText={text => this.handleChange(text, "telephone")}
              value={telephone}
              onBlur={() => this.validation("telephone", telephone)}
            />
            {validation.telephone ? (
              <Text style={styles.error}>Invalid phone number</Text>
            ) : null}

            <TextInput
              style={styles.text}
              placeholder="Email"
              returnKeyType="next"
              keyboardType="email-address"
              returnKeyType="next"
              ref={input => {
                this.email = input;
              }}
              onSubmitEditing={() => this.password.focus()}
              onChangeText={text => this.handleChange(text, "email")}
              value={email}
              onBlur={() => this.validation("email", email)}
            />
            {validation.email ? (
              <Text style={styles.error}>Please enter a valid email</Text>
            ) : null}
            <View style={styles.password}>
              <TextInput
                style={{ flex: 1, color: textColor }}
                placeholder="Password"
                secureTextEntry={!this.state.showPassword}
                returnKeyType="next"
                returnKeyType="go"
                ref={input => {
                  this.password = input;
                }}
                onSubmitEditing={() => this.onSignup(this.state.signup)}
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
              <Text style={styles.error}>
                Minimum password length of 8 and a combination of numbers and
                letters
              </Text>
            ) : null}

            {isLoading ? (
              <ActivityIndicator color={primaryColor} size={30} />
            ) : (
              <Button
                style={styles.buttonSignup}
                mode="contained"
                onPress={() => {
                  this.onSignup(this.state.signup);
                }}
              >
                Sign up
              </Button>
            )}
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>
              Ready have account?{" "}
              <Text onPress={() => replace("Login")} style={styles.login}>
                Login
              </Text>
            </Text>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: "center",
    marginVertical: 20
  },
  registerContainer: {
    paddingBottom: 20,
    alignItems: "center"
  },
  icon: {
    color: primaryColor
  },
  formContainer: {
    flexGrow: 1,
    flex: 1
  },
  infoContainer: {
    alignItems: "center",
    paddingTop: 30
  },
  info: {
    color: "#95a5a6"
  },
  login: {
    color: "#2980b9"
  },
  text: {
    borderColor: "#3498db",
    borderBottomWidth: 0.5,
    marginBottom: 10,
    borderRadius: 5,
    color: textColor
  },
  buttonSignup: {
    backgroundColor: "#2980b9",
    marginTop: 10
  },
  error: {
    color: "#eb4d4b",
    marginLeft: 4
  },
  password: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#3498db",
    borderBottomWidth: 0.5,
    marginBottom: 10
  }
});
