import React from 'react';
import { View, Animated, Easing, Text } from 'react-native';

const colors = ['red', 'green', 'blue', 'yellow'];

export default class GoogleTrendsItem extends React.Component {
    constructor(props) {
        super(props);
        this.number = this.random(4);
        this.option = this.number % 2 === 0;
        this.delay = this.random(2000);

        const { width, height } = this.props;

        this.state = {
            containerColorIndex: this.number,
            contentColorIndex: (this.number + 1) % 4,
            contentWidth: this.option ? new Animated.Value(0) : new Animated.Value(width),
            contentHeight: this.option ? new Animated.Value(height) : new Animated.Value(0),
        };
    }

    componentDidMount() {
        const { width, height } = this.props;
        if (this.option) {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(
                        this.state.contentWidth,
                        {
                            duration: 600,
                            toValue: width,
                            easing: Easing.bezier(0.06, 0.74, 0.24, 1),
                            delay: 600,
                        }
                    ),
                    Animated.timing(
                        this.state.contentHeight,
                        {
                            duration: 600,
                            toValue: 0,
                            easing: Easing.bezier(0.06, 0.74, 0.24, 1),
                        }
                    ),
                    Animated.timing(
                        this.state.contentHeight,
                        {
                            duration: 600,
                            toValue: height,
                            easing: Easing.bezier(0.06, 0.74, 0.24, 1),
                        }
                    ),
                    Animated.timing(
                        this.state.contentWidth,
                        {
                            duration: 600,
                            toValue: 0,
                            easing: Easing.bezier(0.06, 0.74, 0.24, 1),
                        }
                    ),
                    Animated.timing(
                        this.state.contentWidth,
                        {
                            duration: 600,
                            toValue: 0,
                            easing: Easing.bezier(0.06, 0.74, 0.24, 1),
                            delay: this.delay,
                        }
                    ),
                ])
            ).start();
        } else {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(
                        this.state.contentHeight,
                        {
                            duration: 600,
                            toValue: height,
                            easing: Easing.bezier(0.06, 0.74, 0.24, 1),
                            delay: 600,
                        }
                    ),
                    Animated.timing(
                        this.state.contentWidth,
                        {
                            duration: 600,
                            toValue: 0,
                            easing: Easing.bezier(0.06, 0.74, 0.24, 1),
                        }
                    ),
                    Animated.timing(
                        this.state.contentWidth,
                        {
                            duration: 600,
                            toValue: width,
                            easing: Easing.bezier(0.06, 0.74, 0.24, 1),
                        }
                    ),
                    Animated.timing(
                        this.state.contentHeight,
                        {
                            duration: 600,
                            toValue: 0,
                            easing: Easing.bezier(0.06, 0.74, 0.24, 1),
                        }
                    ),
                    Animated.timing(
                        this.state.contentHeight,
                        {
                            duration: 600,
                            toValue: 0,
                            easing: Easing.bezier(0.06, 0.74, 0.24, 1),
                            delay: this.delay,
                        }
                    ),
                ])
            ).start();
        }   
    }

    random = (index) => Math.floor((Math.random() * index))

    render() {
        const { width, height } = this.props;
        const { containerColorIndex, contentColorIndex } = this.state;
        return (
            <View
                style={{
                    width,
                    height,
                    backgroundColor: colors[containerColorIndex]
                }}
            >
                <Animated.View
                    style={{
                        width: this.state.contentWidth,
                        height: this.state.contentHeight,
                        backgroundColor: colors[contentColorIndex],
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 40,
                        }}
                    > HINODI </Text>
                </Animated.View>
            </View>
        );
    }
}
