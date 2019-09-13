import { createStackNavigator } from "react-navigation";
import { Wishlist } from "../../components/layouts";
import { primaryColor } from "../../api/constans";

const WishlistNavigator = createStackNavigator(
  {
    Index: {
      screen: Wishlist,
      navigationOptions: {
        title: "Wishlist"
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

WishlistNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};
export default WishlistNavigator;
