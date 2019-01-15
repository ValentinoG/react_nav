import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

class Login extends React.Component {
	state={
		user: null
	}
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Schermata di login</Text>
        <Text> Inserisci Username: </Text>
        <TextInput 
	        style={{width:100, height:20, borderWidth:1, borderColor:'#aaa', textAlign:'center'}} 
	        placeholder="Username"
	        onChangeText={(text) => {
	        	console.log(this.state.user)
	        	this.setState({user:text})
	        }}
	    />
	    <Button 
	    title="Accedi" 
	    onPress={ () => this.props.navigation.navigate('Welcome', {user:this.state.user})  }/>
      </View>
    );
  }
}

export default Login;