import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "react-navigation";

import { AuthRoot } from "../../components/layouts";
import ExploreNavigation from "./Explore";
import LoginNavigator from "./Login";
import { primaryColor } from "../../api/constans";

const MenuNavigator = createBottomTabNavigator(
  {
    Explore: {
      screen: ExploreNavigation,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home-outline" color={tintColor} size={25} />
        )
      }
    },
    Wishlist: {
      screen: AuthRoot,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="heart-outline" color={tintColor} size={25} />
        )
      }
    },
    Chat: {
      screen: AuthRoot,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="message-outline" color={tintColor} size={25} />
        )
      }
    },
    Auth: {
      screen: LoginNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="account-circle-outline" color={tintColor} size={25} />
        ),
        title: "Login"
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: primaryColor
    }
  }
);

export default MenuNavigator;
