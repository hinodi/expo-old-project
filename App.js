import React from 'react';
import { StyleSheet, View } from 'react-native';
// import AnimatedView from './src/Animated/AnimatedView';
// import { Triangle, Pentagon } from './src/Shapes';
import GoogleTrends from './src/GoogleTrends';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <GoogleTrends />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
