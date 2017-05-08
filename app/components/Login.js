import React, { PropTypes } from 'react';
import {View, TextInput, Text} from 'react-native';
import { Button } from 'react-native-elements';
import {Icon} from 'react-native-elements';

import cssLogin from '../styles/loginStyles';

const Login = ({handleUsername, handlePwd, handleLogIn, pwd, name, error, handleNavigationSignUp}) => (
  <View style={cssLogin.container}>
    {error && <Text>Error, couldn't login correctly</Text>}
    <View style={cssLogin.loginBox}>
      <Icon name="account-circle" size={200} color={'#FF9800'}/>
      <Text>Email: </Text>
      <TextInput style={{height: 40}} autoCapitalize="none" onChangeText={handleUsername} value={name} placeholder="Enter the username"/>
      <Text>Password: </Text>
      <TextInput secureTextEntry={true} style={{height: 40}} value={pwd} onChangeText={handlePwd} placeholder="Enter the password"/>
      <Button buttonStyle={{backgroundColor: '#FF9800'}} onPress={handleLogIn} title="Log In"/>
    </View>
    <Button buttonStyle={{backgroundColor: '#FFC107'}} onPress={handleNavigationSignUp} title="SignUp" />
  </View>
);

Login.propTypes = {
  handleUsername: PropTypes.func.isRequired,
  handlePwd: PropTypes.func.isRequired,
  handleLogIn: PropTypes.func.isRequired,
  pwd: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  handleNavigationSignUp: PropTypes.func.isRequired
};

export default Login;
