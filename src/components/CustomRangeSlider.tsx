import { View, Text, StyleSheet } from 'react-native'
import React, { useCallback, useState , } from 'react'
import { vh, vw } from '../utils/dimensions'
import colors from '../utils/colors'
import RnRangeSlider from 'rn-range-slider'


export default function CustomRangeSlider() {
    const MIN_DEFAULT = 1000000;
    const MAX_DEFAULT = 150000000;
    
    
    const renderThumb = useCallback(() => {
        return (
            <View style={styles.thumbBorder}>
                <View style={styles.thumb} />
            </View>

        )
    }, [])
    const renderRail = useCallback(() => {
        return (
            <View style={styles.rail} />
        )
    }, [])
    const renderRailSelected = useCallback(() => {
        return (
            <View style={styles.railSelected} />
        )
    }, [])

    const handleValueChange = useCallback((low: any, high: any) =>{
        console.log('low', low)
        console.log('high', high)
    }, []);
    return (

        <RnRangeSlider
            min={MIN_DEFAULT}       //fixed slider value
            max={MAX_DEFAULT}     //fixed slider value
            low={400000}
            high={900000}
            step={1000000}
            floatingLabel
            renderThumb={renderThumb}
            renderRail={renderRail}
            renderRailSelected={renderRailSelected}
            // onValueChange={handleValueChange}
            hitSlop={styles.hitslop}
        />

    )
}
const styles = StyleSheet.create({
    thumbBorder: {
        width: vw(16.5),
        height: vw(16.5),
        borderRadius: vw(100),
        backgroundColor: colors.WHITE,
        justifyContent: 'center',
        alignItems: 'center'
    },
    thumb: {
        width: vw(8.5),
        height: vw(8.5),
        borderRadius: vw(100),
        borderColor: colors?.ORANGE,
        backgroundColor: colors.ORANGE,
        shadowColor: "#fff",
        shadowOffset: { width: 0, height: -1 },
        shadowOpacity: 0.16,
        shadowRadius: 6,
        elevation: 10
    },
    rail: {
        flex: 1,
        height: vh(30),
        // borderRadius: vw(50),
        backgroundColor: '#F5F4F8'
    },
    railSelected: {
        height: vh(30),
        backgroundColor: colors.ORANGE,
        // borderRadius: vw(50),
    },
    hitslop: {
        top: vh(10),
        bottom: vh(10),
        left: vw(10),
        right: vw(10)
    }
})