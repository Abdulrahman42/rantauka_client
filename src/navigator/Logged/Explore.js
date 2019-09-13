import { createStackNavigator } from "react-navigation";
import {
  Explore,
  KosDetail,
  KosList,
  Booking,
  BookingCalender,
  BookingList,
  BookingDuration,
  Iklan,
  Filter,
  Profile
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
    Ads: {
      screen: Iklan
    },
    Filter: {
      screen: Filter
    },
    HomeDetail: {
      screen: KosDetail
    },
    Booking: {
      screen: Booking
    },
    BookingCalender: {
      screen: BookingCalender
    },
    BookingDuration: {
      screen: BookingDuration
    },
    BookingList: {
      screen: BookingList
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
