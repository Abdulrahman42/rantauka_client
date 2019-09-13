import { createStackNavigator } from "react-navigation";
import {
  Explore,
  KosDetail,
  KosList,
  Login,
  Register,
  Filter
} from "../../components/layouts";
import { primaryColor } from "../../api/constans";

const ExploreNavigation = createStackNavigator(
  {
    Index: {
      screen: Explore,
      navigationOptions: {
        title: "Rantauka"
      }
    },
    HomeList: {
      screen: KosList,
      navigationOptions: {
        header: null
      }
    },
    HomeDetail: {
      screen: KosDetail
    },
    Booking: {
      screen: Login
    },
    Register: {
      screen: Register
    },
    Login: {
      screen: Login
    },
    Filter: {
      screen: Filter
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

ExploreNavigation.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};
export default ExploreNavigation;
