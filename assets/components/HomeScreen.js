import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Benvenuto!</Text>
        <Button title="Login" onPress={() => this.props.navigation.navigate('Login') }/>
      </View>
    );
  }
}

export default HomeScreen;