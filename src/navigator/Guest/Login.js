import { createStackNavigator } from "react-navigation";
import { Login, Register, AuthRoot } from "../../components/layouts";
import { primaryColor } from "../../api/constans";

const LoginNavigator = createStackNavigator(
  {
    Index: {
      screen: AuthRoot,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: Login
    },
    Register: {
      screen: Register
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
        borderBottomColor: "transparent"
      },
      headerTintColor: primaryColor
    }
  }
);

LoginNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};
export default LoginNavigator;
