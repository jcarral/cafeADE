import React, {PropTypes} from 'react';
import {ScrollView, View, TextInput, Text} from 'react-native';

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
	<ScrollView style={css.container}>
		<Text>Nombre de usuario:</Text>
		<TextInput style={{
			height: 40
		}} onChangeText={handleUsername} value={name} placeholder="Introduce el nombre de usuario..."/>
	<Text>DNI/Pasaporte:</Text>
		<TextInput style={{
			height: 40
		}} placeholder="Introduce el DNI/Pasaporte..."/>
	<Text>Correo:</Text>
		<TextInput autoCapitalize="none" style={{
			height: 40
		}} onChangeText={handleEmail} value={email} placeholder="Introduce el email..."/>
	<Text>Contraseña:</Text>
		<TextInput secureTextEntry={true} style={{
			height: 40
		}} onChangeText={handlePwd} value={pwd} placeholder="Introduce la contraseña"/>
	<Button buttonStyle={{backgroundColor: '#FF9800'}} onPress={handleSubmit} title="Registrarse!"/>
	</ScrollView>
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
