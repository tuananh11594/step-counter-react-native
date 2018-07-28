import React, { Component } from 'react';
import {
    Text,
} from 'react-native';
import Colors from '../../common/constants/colors';

export const TextScreen = ({ content }) => {
    return (
        <Text style={styles.text_screen}>{content}</Text>
    );
}

const styles = {
    text_screen: {
        width: '100%',
        fontSize: 30,
        fontWeight: '800',
        backgroundColor: Colors.white,
        paddingBottom: 20,
        paddingLeft: 20,
      },
}