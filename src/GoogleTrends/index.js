import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import GoogleTrendsItem from './Item';

const numberRow = 4;

export default class GoogleTrends extends React.Component {
    generateArray(length) {
        const array = [];
        for (let i = 0; i < length; i++) {
            array.push(i);
        }
        return array;
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.generateArray(numberRow * 2).map((e, index) => (
                        <GoogleTrendsItem
                            key={index.toString()}
                            width={width}
                            height={height}
                        />
                    ))
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        flexWrap: 'wrap',
        alignItems: 'center',

    },
});

const width = Dimensions.get('window').width / 2;
const height = Dimensions.get('window').height / numberRow;
