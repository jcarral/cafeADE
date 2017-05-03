import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Cafeteria ADE</Text>
        <Text>Login.</Text>
          <TextInput
              placeholder="Red placeholder text color"
              placeholderTextColor="red"
            />
        <TextInput secureTextEntry={true} placeholder="Password"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});
