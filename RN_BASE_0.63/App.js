/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Provider } from "react-redux";
import store from "./app/redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View
          // ref={navigatorRef => NavigationUtil.setTopLevelNavigator(navigatorRef)}
        >

          <Text>Main</Text>
        </View>
      </Provider>
    )
  }
}
export default App;
