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
      <Text>Correo: </Text>
      <TextInput style={{height: 40}} autoCapitalize="none" onChangeText={handleUsername} value={name} placeholder="Introduce el correo electrónico..."/>
      <Text>Contraseña: </Text>
      <TextInput secureTextEntry={true} style={{height: 40}} value={pwd} onChangeText={handlePwd} placeholder="Introduce la contraseña..."/>
      <Button buttonStyle={{backgroundColor: '#FF9800'}} onPress={handleLogIn} title="Iniciar sesión"/>
    </View>
    <Button buttonStyle={{backgroundColor: '#FFC107'}} onPress={handleNavigationSignUp} title="Registro" />
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
