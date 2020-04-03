import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class Pentagon extends React.Component {
    render() {
        return (
            <View style={styles.pentagon}>
                <View style={styles.pentagonInner} />
                <View style={styles.pentagonBefore} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pentagon: {
        backgroundColor: 'transparent',
        marginTop: 35,
    },
    pentagonInner: {
        width: 90,
        borderBottomColor: 'red',
        borderBottomWidth: 0,
        borderLeftColor: 'transparent',
        borderLeftWidth: 18,
        borderRightColor: 'transparent',
        borderRightWidth: 18,
        borderTopColor: 'red',
        borderTopWidth: 50
    },
    pentagonBefore: {
        position: 'absolute',
        height: 0,
        width: 0,
        top: -35,
        left: 0,
        borderStyle: 'solid',
        borderBottomColor: 'red',
        borderBottomWidth: 35,
        borderLeftColor: 'transparent',
        borderLeftWidth: 45,
        borderRightColor: 'transparent',
        borderRightWidth: 45,
        borderTopWidth: 0,
        borderTopColor: 'transparent',
    }
});
