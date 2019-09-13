import { createStackNavigator } from "react-navigation";

import MenuNavigator from "./Menu";

const LoggedNavigator = createStackNavigator({
  Menu: {
    screen: MenuNavigator,
    navigationOptions: {
      header: null
    }
  }
});

export default LoggedNavigator;
