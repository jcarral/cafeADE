import React, { PropTypes } from 'react';
import { View, Image} from 'react-native';
import { Button } from 'react-native-elements';

import cssBtn from '../styles/buttonStyles';
import cssMeals from '../styles/mealsStyles';

const MealsView = ({handleNavigation}) => (
  <View style={cssMeals.container}>
    <Image  source={require('../images/menuLogo.png')} resizeMode={Image.resizeMode.cover} style={{'height': 160, 'width': 160, marginLeft: 100}}/>
    <View>
      <Button buttonStyle={cssBtn.mainBtn} title={'Combinados'} onPress={() => handleNavigation('combinados')}/>
      <Button buttonStyle={cssBtn.mainBtn} title={'Otros'} onPress={() => handleNavigation('otros')}/>
      <Button buttonStyle={cssBtn.mainBtn} title={'Bocadillos'} onPress={() => handleNavigation('bocadillos')}/>
    </View>
  </View>
);

MealsView.propTypes = {
  handleNavigation : PropTypes.func.isRequired
};

export default MealsView;
