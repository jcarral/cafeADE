import React from 'react';
import { Text, View, Image } from 'react-native';

import css from '../styles/loadingStyles';

const LoadingPage = () => (
    <View style={css.container}>
      <Image  source={require('../images/loading.gif')} resizeMode={Image.resizeMode.cover} style={{'height': 160, 'width': 160}}/>
      <Text> Cargando... </Text>
    </View>
);

export default LoadingPage;
