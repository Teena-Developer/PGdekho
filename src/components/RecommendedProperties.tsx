import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../utils/colors'
import { vh, vw } from '../utils/dimensions'
import FastImage from 'react-native-fast-image'
import { localImage } from '../utils/localImages'

export default function RecommendedProperties() {
    return (
        <View style={styles.container}>
            <FastImage source={localImage.PROPERTY} resizeMode='cover' style={styles.img} />
            <View style={styles.propertyDetails}>
                <Text style={styles.title}>Sec-10, Gurugram</Text>
                <Text style={styles.subTitle}>345 rented props</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: vw(161.53),
        backgroundColor: colors.WHITE,
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 10,
        shadowRadius: 5,
        elevation: 5,
        borderBottomLeftRadius:vw(15),
        borderBottomRightRadius:vw(15),
        borderTopLeftRadius: vw(15),
        borderTopRightRadius: vw(15)
    },
    img: {
        height: vh(159.53),
        width: vw(161.53),
        borderTopLeftRadius: vw(15),
        borderTopRightRadius: vw(15)
    },
    propertyDetails: {
        paddingVertical: vh(12),
        paddingBottom: vh(16),
        paddingLeft: vw(14),
        
    },
    title: {
        fontSize: vw(12),
        fontWeight: '600',
        lineHeight: vw(12),
        color: colors.BLACK,
        marginBottom: vw(8)
    },
    subTitle: {
        fontSize: vw(10),
        fontWeight: '400',
        lineHeight: vw(10),
        color: colors.DARKGRAY
    }

})