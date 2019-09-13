import { createStackNavigator } from "react-navigation";
import { Chat } from "../../components/layouts";
import { primaryColor } from "../../api/constans";

const ChatNavigator = createStackNavigator(
  {
    Index: {
      screen: Chat,
      navigationOptions: {
        title: "Chat"
      }
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

ChatNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};
export default ChatNavigator;
