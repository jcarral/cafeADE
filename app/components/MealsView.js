import React, { PropTypes } from 'react';
import { View, Button } from 'react-native';

const MealsView = ({handleNavigation}) => (
  <View>
    <Button title={'Combinados'} onPress={() => handleNavigation('combinados')}/>
    <Button title={'Otros'} onPress={() => handleNavigation('otros')}/>
    <Button title={'Bocadillos'} onPress={() => handleNavigation('bocadillos')}/>
  </View>
);

MealsView.propTypes = {
  handleNavigation : PropTypes.func.isRequired
};

export default MealsView;
