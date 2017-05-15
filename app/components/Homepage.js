import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';

import cssBtn from '../styles/buttonStyles';
import cssHome from '../styles/homepageStyles';

const Homepage = ({isLogged, handleNavigationLogout, handleNavigationLogin}) => (
  <View style={cssHome.container}>
    <Text style={cssHome.title}> Cafetería ADE </Text>
    <Image style={cssHome.logo} source={require('../images/logo.png')} resizeMode={Image.resizeMode.cover} style={{'height': 160, 'width': 160}}/>
    {!isLogged && <Button buttonStyle={cssBtn.mainBtn} underlayColor="red" title="Iniciar sesión" onPress={handleNavigationLogin} />}
    {isLogged && <Button buttonStyle={cssBtn.logoutBtn} title="Cerrar sesión" onPress={handleNavigationLogout} />}
  </View>
);

Homepage.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  handleNavigationLogout: PropTypes.func.isRequired,
  handleNavigationLogin:  PropTypes.func.isRequired
};

export default Homepage;
