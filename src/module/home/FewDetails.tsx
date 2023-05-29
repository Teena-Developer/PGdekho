import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import colors from '../../utils/colors'
import { vh, vw } from '../../utils/dimensions'
import CustomButton from '../../components/CustomButton'
import FastImage from 'react-native-fast-image'
import { localImage } from '../../utils/localImages'
import ButtonComponent from '../../components/ButtonComponent'
import CustomRangeSlider from '../../components/CustomRangeSlider'


export default function FewDetails() {
    const property = ['All', 'PG', '1 RK', '1 BHK', '2 BHK']
    const gender = ['Male', 'Female', 'Coed']
    const bedrooms = ['1 Bed', '1 Bed', '1 Bed']

    const value = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0]
    console.log('value', value)
    // useEffect(() => {
    //     console.log('hiii')
    //     Animated.timing(value, {
    //         toValue: { x: 280, y: 0 },
    //         duration: 1000,
    //         useNativeDriver: false,
    //     }).start();
    // }, []);

    function handleSubmit(){
        Animated.timing(value, {
            toValue: { x: 200, y: 0 },
            duration: 1000,
            useNativeDriver:false,
        }).start();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Property Type</Text>
            <View style={styles.buttonontainer}>
                {property.map((item: any, index: number) => {
                    return (
                        <View key={index}>
                            <CustomButton onPressCustomButton={undefined} title={item} selected />
                        </View>
                    )
                })}
            </View>
            <CustomRangeSlider />
            <View style={styles.priceRange}>
                <Text style={styles.priceRangeTxt}>₹ 0</Text>
                <Text style={styles.priceRangeTxt}>₹ 40k</Text>
                <Text style={styles.priceRangeTxt}>₹ 80 K</Text>

            </View>
            <Text style={styles.title}>Gender</Text>
            <View style={styles.genderContainer}>
                {gender.map((item: any, index: number) => {
                    return (
                        <View key={index}>
                            <CustomButton onPressCustomButton={undefined} title={item} extraStyle={{ paddingHorizontal: vw(32), }} selected />
                        </View>
                    )
                })}
            </View>
            <Text style={styles.title}>Number of Bedrooms</Text>
            <View style={styles.BedRoomsContainer}>
                {bedrooms.map((item: any, index: number) => {
                    return (
                        <View key={index} style={styles.BedRooms}>
                            <CustomButton onPressCustomButton={undefined} title={item} selected />
                        </View>
                    )
                })}

            </View>
            <View style={styles.resetContainer}>
                <View style={styles.leftPart}>
                    <FastImage source={localImage.RESET} resizeMode='contain' style={styles.resetImg} />
                    <Text style={styles.resettxt}>Reset all</Text>
                </View>
                <ButtonComponent title={'Show properties'} onPressCustomButton={undefined} extraStyle={{ width: '50%' }} />
            </View>

            <Animated.View style={value.getLayout()}>
                <View style={{ height: 40, width: 40, borderRadius: 100, backgroundColor: 'red' }}></View>
            </Animated.View>
            <TouchableOpacity onPress={handleSubmit}><Text>click me</Text></TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        paddingHorizontal: vw(25)
    },
    buttonontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: vw(30)
    },
    title: {
        fontSize: vw(14),
        fontWeight: '600',
        lineHeight: vh(21),
        color: colors.BLACK,
        marginTop: vh(30),
        marginBottom: vh(20)
    },
    priceRange: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    priceRangeTxt: {
        fontSize: vw(11.34),
        fontWeight: '500',
        lineHeight: vh(14.17),
        color: colors.DARKGRAY,
        marginTop: vh(11.30)
    },
    genderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    BedRoomsContainer: {
        flexDirection: 'row'
    },
    BedRooms: {
        marginRight: vw(11)
    },
    resetContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: vw(1),
        left: vw(25)
    },
    resetImg: {
        height: vh(16),
        width: vw(15)
    },
    resettxt: {
        fontSize: vw(16),
        fontWeight: '500',
        lineHeight: vh(16),
        color: colors.BLACKGRAY,
        paddingLeft: vw(10.15)
    },
    leftPart: {
        flexDirection: 'row',
        alignItems: 'center'
    },




})