import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import Colors from '../../common/constants/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import { ViewLine } from './view-line.component'

export const TouchableCustom = ({ sourceImage, content, subContent, action, showIconRight = true, showLine = true }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.view_button}>
                <Image
                    style={styles.icon_button}
                    source={sourceImage}
                />
                <Text style={styles.text_button}>{content}</Text>
                {
                    subContent ? <Text style={styles.text_sub}>{subContent}</Text> : null
                }
                {
                    showIconRight ? <Entypo name={"chevron-right"} size={25} color={'gray'} /> : null
                }
            </View>
            {
                showLine ? <ViewLine paramMarginLeft={45}/> : null
            }
        </TouchableOpacity>
    );
}

const styles = {
    container: {
        paddingLeft: 15,
        paddingTop: 10,
    },
    view_button: {
        paddingRight: 15,
        paddingBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text_button: {
        flex: 1,
        paddingLeft: 15,
        fontSize: 17,
    },
    icon_button: {
        width: 30,
        height: 30,
    },
    text_sub: {
        fontSize: 17,
        marginRight: 5,
    },
}