import React, { PropTypes } from 'react';
import {View, TextInput, Text, Button} from 'react-native';

const Login = ({handleUsername, handlePwd, handleLogIn, pwd, name, error, handleNavigationSignUp}) => (
  <View>
    {error && <Text>Error, couldn't login correctly</Text>}
    <Text>Username: </Text>
    <TextInput style={{height: 40}} onChangeText={handleUsername} value={name}placeholder="Enter the username"/>
      <Text>Password: </Text>
      <TextInput style={{height: 40}} value={pwd} onChangeText={handlePwd} placeholder="Enter the password"/>
      <Button onPress={handleLogIn} title="Log In"/>
      <Button onPress={handleNavigationSignUp} title="SignUp" />
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
