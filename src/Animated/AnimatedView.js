import React from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';

export default class AnimatedView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marginTopAnimation: new Animated.Value(50),
      scaleAnimation: new Animated.Value(1),
      //------------------------------------------------
      interpolateAnimation: new Animated.Value(0),
      //------------------------------------------------
      marginTop1: new Animated.Value(50),
      marginTop2: new Animated.Value(350),
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.marginTopAnimation,
      {
        duration: 500,
        toValue: 300,
        easing: Easing.easing,
        delay: 500,
      }
    ).start();
    Animated.timing(
      this.state.scaleAnimation,
      {
        duration: 500,
        toValue: 2,
        easing: Easing.bezier(0.6, -0.28, 0.735, 0.045),
        delay: 500,
      }
    ).start();
    setTimeout(() => {
      Animated.spring(
        this.state.marginTopAnimation,
        {
          toValue: 50,
          bounciness: 20,
          speed: 4,
        }
      ).start();
    }, 1200);
    //------------------------------------------------
    Animated.timing(
      this.state.interpolateAnimation,
      {
        duration: 2000,
        toValue: 1,
        easing: Easing.easing,
        delay: 500,
      }
    ).start();
    //------------------------------------------------
    Animated.sequence([
      Animated.timing(
        this.state.marginTop2,
        {
          duration: 500,
          toValue: 50,
          easing: Easing.easing,
        }
      ),
      Animated.timing(
        this.state.marginTop1,
        {
          duration: 500,
          toValue: 350,
          easing: Easing.easing,
        }
      ),
    ]).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: 'green',
            alignSelf: 'center',
            transform: [{ scale: this.state.scaleAnimation }],
            marginTop: this.state.marginTopAnimation,
          }}
        />
        {/* ------------------------------------------------ */}
        {/* <Animated.View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: 'green',
            alignSelf: 'center',
            transform: [{ scale: this.state.interpolateAnimation.interpolate({
              inputRange: [0, 0.25, 0.5, 1],
              outputRange: [0, 1.5, 0.5, 2],
            }) }],
            marginTop: this.state.interpolateAnimation.interpolate({
              inputRange: [0, 0.25, 0.5, 1],
              outputRange: [0, 300, 100, 400],
            }),
          }}
        /> */}
        {/* <View
          style={{ flexDirection: 'row' }}
        >
          <Animated.View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: 'green',
              alignSelf: 'flex-start',
              marginTop: this.state.marginTop1
            }}
          />
          <Animated.View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: 'green',
              alignSelf: 'flex-end',
              marginTop: this.state.marginTop2
            }}
          />
        </View> */}
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
