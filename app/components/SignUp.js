import React, {PropTypes} from 'react';
import {View, TextInput, Text} from 'react-native';

import { Button } from 'react-native-elements';

import css from '../styles/signupStyles';

const SignUp = ({
	handleUsername,
	handlePwd,
	handleEmail,
	handleSubmit,
	name,
	pwd,
	email,
	error
}) => (
	<View style={css.container}>
		<Text>Username:</Text>
		<TextInput style={{
			height: 40
		}} onChangeText={handleUsername} value={name} placeholder="Enter the username"/>
	<Text>DNI/Pasaporte:</Text>
		<TextInput style={{
			height: 40
		}} placeholder="Enter the ID Card"/>
		<Text>Email:</Text>
		<TextInput autoCapitalize="none" style={{
			height: 40
		}} onChangeText={handleEmail} value={email} placeholder="Enter the email"/>
	<Text>Password:</Text>
		<TextInput secureTextEntry={true} style={{
			height: 40
		}} onChangeText={handlePwd} value={pwd} placeholder="Enter the password"/>
		<Button buttonStyle={{backgroundColor: '#FF9800'}} onPress={handleSubmit} title="Sign Up"/>
	</View>
);

SignUp.propTypes = {
  handleUsername: PropTypes.func.isRequired,
  handlePwd: PropTypes.func.isRequired,
  handleEmail: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  pwd: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired
};

export default SignUp;
