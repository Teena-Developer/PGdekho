import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { localImage } from '../utils/localImages'
import { vh, vw } from '../utils/dimensions'
import colors from '../utils/colors'
import { TextInput } from 'react-native-gesture-handler'

export default function CustomSearchBar() {
    return (
        <View style={styles.searchBar}>
            <FastImage source={localImage.SEARCH} style={styles.searchImg} resizeMode='contain' />
            <TextInput 
            style={styles.txt}
            placeholder='Search Here' />
            <FastImage source={localImage.MIC} style={styles.micImg} resizeMode='contain' />
        </View>
    )
}
const styles = StyleSheet.create({
    searchBar: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: vw(1.5),
        borderColor: colors.GRAY,
        borderRadius: vw(8),
        paddingHorizontal: vw(13.67)
    },
    searchImg: {
        width: vw(16),
        height: vh(16)
    },
    txt: {
        width:'85%',
        fontSize: vw(14),
        marginLeft: vw(12),
        fontWeight: '500',
        lineHeight: vw(21),
        color: colors.DARKGRAY,
    },
    micImg:{
        width:vw(20),
        height:vh(21),
    }
})