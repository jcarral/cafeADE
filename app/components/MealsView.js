import React, { PropTypes } from 'react';
import { Text } from 'react-native';

const MealsView = ({list}) => (
  <Text> Aquí iran los menús </Text>
);

MealsView.propTypes = {
  list : PropTypes.array.isRequired
};

export default MealsView;
