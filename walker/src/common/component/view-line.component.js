import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import Colors from '../../common/constants/colors';

export const ViewLine = ({ paramMarginLeft }) => {
    return (
        <View style={[styles.view_line, { marginLeft: paramMarginLeft }]} />
    );
}

const styles = {
    view_line: {
        width: '100%',
        height: 0.5,
        backgroundColor: Colors.gray
    },
}