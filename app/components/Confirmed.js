import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';

import css from '../styles/confirmedStyles';

const Confirmed = ({resume, navigateToInit}) => (
    <View style={css.container}>
      <Card>
        <Text style={css.text}> {resume.username}, el pedido se ha realizado correctamente. </Text>
        <Text> Tienes el pedido número:  </Text>
        <Text style={css.orderCount}>#{resume.count}</Text>
        <Text> Podrás pasarte a recogerlo a las </Text>
          <Text style={css.date}>{getOrderDate(resume.date)}</Text>
        <Button buttonStyle={css.btn} onPress={navigateToInit} title="Volver al inicio"/>
      </Card>
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
