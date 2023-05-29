import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../utils/colors'
import { vh, vw } from '../utils/dimensions'

interface Props {
    title: string;
    onPressCustomButton: any;
    extraStyle?: any;
}
export default function ButtonComponent(props: Props) {
    console.log('props-->>',props);
    
    return (
        <TouchableOpacity style={[styles.button, props?.extraStyle]} onPress={props?.onPressCustomButton}>
            <Text style={styles.ButtonTxt}>{props?.title}</Text>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.ORANGE,
        alignItems: "center",
        borderRadius: vw(10),
        paddingVertical: vh(12),
        width: '100%'
    },
    ButtonTxt: {
        fontSize: vw(16),
        fontWeight: '500',
        color: colors.WHITE

    }

})