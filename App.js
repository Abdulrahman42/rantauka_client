import React from "react";
import { Provider } from "react-redux";
import { createAppContainer } from "react-navigation";

import AppNavigator from "./src/navigator";
import store from "./src/_redux/store";

const RootNavigator = createAppContainer(AppNavigator);

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
