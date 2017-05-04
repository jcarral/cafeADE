import React, {PropTypes} from 'react';
import {View, TextInput, Text, Button} from 'react-native';

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
	<View>
		<Text>Username:</Text>
		<TextInput style={{
			height: 40
		}} onChangeText={handleUsername} value={name} placeholder="Enter the username"/>
		<Text>Email:</Text>
		<TextInput style={{
			height: 40
		}} onChangeText={handleEmail} value={email} placeholder="Enter the email"/>
	<Text>Password:</Text>
		<TextInput style={{
			height: 40
		}} onChangeText={handlePwd} value={pwd} placeholder="Enter the password"/>
		<Button onPress={handleSubmit} title="Sign Up"/>
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
