import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

class Welcome extends React.Component {
  render() {
  	const user = this.props.navigation.getParam('user', 'yfyjf');

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Ciao: {user===null?"defaul": user}</Text>
      </View>
    );
  }
}

export default Welcome;