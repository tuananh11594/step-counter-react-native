import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import Colors from '../../../../common/utils/colors'
import { ViewLine } from '../../../../common/component/view-line.component'
import Entypo from 'react-native-vector-icons/Entypo';

export const TargetElement = ({ param }) => {
    return (
        <View style={styleCellPhone.view_cell_phone}>
            <Text style={styleCellPhone.text_phone}>{param.number}</Text>
            <TouchableOpacity style={styleCellPhone.button}>
                <Entypo name={"message"} size={30} color={Colors.color_blue} />
            </TouchableOpacity>
            <TouchableOpacity style={styleCellPhone.button}>
                <Entypo name={"phone"} size={30} color={Colors.color_blue} />
            </TouchableOpacity>
        </View>
    );
}

const styleCellPhone = {
    view_cell_phone: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 5,
        paddingRight: 10
    },
    text_phone: {
        fontSize: 17,
        flex: 1
    },
    button: {
        marginRight: 10,
    },
    view_content: {
        flex: 12,
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'red'
    },
    text_bold: {
        fontWeight: 'bold',
        fontSize: 17,
    },
}