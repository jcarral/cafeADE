import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

const Confirmed = ({resume, navigateToInit}) => (
    <View>
      <Text> TuPutoNombre, el pedido se ha realizado correctamente </Text>
      <Text> Tienes el pedido número #975 </Text>
      <Text> Podrás pasarte a recogerlo a las 25:89 </Text>
      <Button onPress={navigateToInit} title="Volver al inicio"/>
    </View>
);

Confirmed.propTypes = {
  resume: PropTypes.object.isRequired,
  navigateToInit: PropTypes.func.isRequired
};

export default Confirmed;
