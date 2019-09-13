import { createSwitchNavigator } from "react-navigation";

import GuestNavigator from "./Guest";
import LoggedNavigator from "./Logged";
import WellcomeScreen from "../components/layouts/Wellcome";

const AppNavigator = createSwitchNavigator({
  Wellcome: {
    screen: WellcomeScreen
  },
  Guest: {
    screen: GuestNavigator
  },
  Logged: {
    screen: LoggedNavigator
  }
});

export default AppNavigator;
