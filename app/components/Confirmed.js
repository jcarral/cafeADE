import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

const Confirmed = ({resume, navigateToInit}) => (
    <View>
      <Text> {resume.username}, el pedido se ha realizado correctamente </Text>
      <Text> Tienes el pedido número #{resume.count} </Text>
      <Text> Podrás pasarte a recogerlo a las  {getOrderDate()}</Text>
      <Button onPress={navigateToInit} title="Volver al inicio"/>
    </View>
);

Confirmed.propTypes = {
  resume: PropTypes.object.isRequired,
  navigateToInit: PropTypes.func.isRequired
};

export default Confirmed;


const getOrderDate = () => {
  const old = new Date();
  let current = new Date();
  current.setMinutes(old.getMinutes()+20);
  return `${current.getHours()}:${current.getMinutes()}`;
}
