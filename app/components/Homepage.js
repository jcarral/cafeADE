import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Homepage = ({isLogged, handleNavigationLogout, handleNavigationLogin}) => (
  <View>
    <Text> Aquí va el logo </Text>
    {!isLogged && <Button title="Iniciar sesión" onPress={handleNavigationLogin} />}
    {isLogged && <Button title="Cerrar sesión" onPress={handleNavigationLogout} />}
  </View>
);

Homepage.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  handleNavigationLogout: PropTypes.func.isRequired,
  handleNavigationLogin:  PropTypes.func.isRequired
};

export default Homepage;
