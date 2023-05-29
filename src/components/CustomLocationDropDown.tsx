import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import colors from '../utils/colors'
import { vh, vw } from '../utils/dimensions'
import FastImage from 'react-native-fast-image'
import { localImage } from '../utils/localImages'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props {
    onPressBtn?:any;
    extraStyle?: any;
    notification?: any;
    title?: any;
    location?: any;
    skip?: any;
    logo?: any;
    loginRegisterBtn?: any;

}

export default function CustomLocationDropDown(props: Props) {

    return (
        <View style={styles.container}>
            {
                props?.logo ?
                    <FastImage source={localImage.LOCATIONICON} style={styles.logo} />
                    : props?.location ?
                        <TouchableOpacity>
                            <Text style={styles.heading}>Current location</Text>
                            <View style={styles.dropDown}>
                                <FastImage source={localImage.LOCATIONICON} resizeMode='contain' style={styles.locationImg} />
                                <Text style={styles.locationTxt}>Gurugram, Haryana</Text>
                                <FastImage source={localImage.DROPDOWN} resizeMode='contain' style={styles.dropDownImg} />
                            </View>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.backButton} onPress={props?.onPressBtn}>
                            <FastImage source={localImage.BACKBUTTON} style={styles.arrowImg} resizeMode='contain' />
                        </TouchableOpacity>
            }

            {props?.title?.length ? <Text style={styles.title}>{props?.title}</Text> : null}

            {props?.loginRegisterBtn ?
                (<View style={styles.LoginRegisterBtn}>
                    <Text style={styles.LoginRegisterBtnTxt}>Login/Register</Text>
                </View>) :
                props?.notification ?
                    <TouchableOpacity style={styles.notification}>
                        <FastImage source={localImage.NOTIFICATIONBALL} resizeMode='contain' style={styles.notificationImg} />
                    </TouchableOpacity> :
                    props?.skip ?
                        <TouchableOpacity style={styles.skipBtn}>
                            <Text style={styles.skipBtnTxt}>skip</Text>
                        </TouchableOpacity> :
                        null
            }



        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.WHITE,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    heading: {
        fontSize: vw(12),
        fontWeight: '500',
        lineHeight: vw(18),
        color: colors.DARKGRAY,
        paddingBottom: vw(6)
    },
    locationImg: {
        width: vw(15),
        height: vh(17),
        marginRight: vw(11)
    },
    dropDown: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    dropDownImg: {
        width: vw(13),
        height: vh(6),
        marginLeft: vw(5.4)
    },
    locationTxt: {
        fontSize: vw(14),
        fontWeight: '500',
        lineHeight: vw(21),
        color: colors.BLACK
    },
    notification: {
        borderWidth: vw(1),
        borderColor: colors.GRAY,
        // padding: vw(10),
        height: vh(40),
        width: vw(40),
        borderRadius: vw(8),
        justifyContent: 'center',
        alignItems: 'center'
    },
    notificationImg: {
        width: vw(24),
        height: vh(24),
    },
    notificationCircleImg: {
        width: vw(8),
        height: vh(8),
        position: 'absolute',
        right: vw(14),
        top: vh(13)
    },
    arrowImg: {
        width: vw(15),
        height: vh(15),
    },
    backButton: {
        borderWidth: 1,
        borderColor: colors.GRAY,
        height: vh(40),
        width: vw(40),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: vw(8)
    },
    title: {
        fontSize: vw(16),
        fontWeight: '700',
        lineHeight: vw(24),
        color: colors.BLACK
    },
    skipBtn: {
        backgroundColor: colors.GRAY,
        paddingHorizontal: vw(20),
        paddingVertical: vh(7),
        borderRadius: vw(100)
    },
    skipBtnTxt: {
        fontSize: vw(12),
        fontWeight: '400',
        lineHeight: vw(22),
        color: colors.BLACK
    },
    logo: {
        width: vw(36),
        height: vh(44)
    },
    LoginRegisterBtn: {
        paddingHorizontal: vw(18),
        paddingVertical: vh(8),
        backgroundColor: colors.LIGHTORANGE,
        borderRadius: vw(100)
    },
    LoginRegisterBtnTxt: {
        fontSize: vw(10),
        fontWeight: '700',
        lineHeight: vw(22),
        color: colors.ORANGE
    }

})