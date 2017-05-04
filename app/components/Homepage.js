import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Homepage = ({isLogged, handleNavigation, handleNavigationLogin}) => (
  <View>
    <Button title="Ver menús" onPress={handleNavigation}> Ver menús! </Button>
    {!isLogged && <Button title="Iniciar sesión" onPress={handleNavigationLogin} />}
  </View>
);

Homepage.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  handleNavigation: PropTypes.func.isRequired,
  handleNavigationLogin:  PropTypes.func.isRequired
};

export default Homepage;
