import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomLocationDropDown from '../../components/CustomLocationDropDown'
import colors from '../../utils/colors'
import { vh, vw } from '../../utils/dimensions'
import FastImage from 'react-native-fast-image'
import { localImage } from '../../utils/localImages'
import { TouchableOpacity } from 'react-native-gesture-handler'
interface Props {
    navigation: any;
}
export default function Profile(props: Props) {

    const profileData = [
        {
            icon: 'https://cdn4.iconfinder.com/data/icons/ecommerce-online-shop-6/24/User-256.png',
            title: 'Personal Details',
            onPress: () => { }
        },
        {
            icon: 'https://static.thenounproject.com/png/729549-200.png',
            title: 'Terms & Conditions',
            onPress: () => { }
        },
        {
            icon: 'https://cdn-icons-png.flaticon.com/128/665/665049.png',
            title: 'About Us',
            onPress: () => { }
        },
        {
            icon: 'https://cdn-icons-png.flaticon.com/128/3076/3076707.png',
            title: 'Privacy Policy',
            onPress: () => { }
        },
        {
            icon: 'https://cdn4.iconfinder.com/data/icons/ecommerce-online-shop-6/24/User-256.png',
            title: 'Contact Us',
            onPress: () => { }
        },
        {
            icon: 'https://cdn-icons-png.flaticon.com/128/1358/1358023.png',
            title: 'Share The App',
            onPress: () => { }
        },
        {
            icon: 'https://cdn.icon-icons.com/icons2/1744/PNG/512/3643731-bookmark-favorite-rate-rating-star_113418.png',
            title: 'Rate The App',
            onPress: () => { }
        },
        {
            icon: 'https://e7.pngegg.com/pngimages/985/942/png-clipart-computer-icons-encapsulated-postscript-logout-symbol-angle-text.png',
            title: 'Logout',
            onPress: () => { }
        }
    ]

    const backBtn = () => {
        props?.navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <CustomLocationDropDown notification  />
            <View style={styles.profile}>
                <FastImage source={localImage.USER} style={styles.profileImg} resizeMode='contain' />
                <View style={styles.editBtn}>
                    <FastImage source={localImage.PENCIL} style={styles.EditImg} resizeMode='contain' />
                </View>
                <Text style={styles.userName}>Tomas Jefferson</Text>
                <Text style={styles.phoneNo}>+91 - 000000000</Text>
            </View>
            {profileData?.map((item: any, index: number) => {
                return (
                    <TouchableOpacity style={styles.details} key={index}>
                        <View style={index === 7 ? styles.logoutIcon : styles.icon}>
                            <FastImage source={{ uri: item?.icon }} style={styles.iconImg} resizeMode='contain' />
                        </View>
                        <Text style={index === 7 ? styles.logout : styles.title}>{item?.title}</Text>
                    </TouchableOpacity>
                )
            })}

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: vw(25),
        backgroundColor: colors.WHITE,
    },
    profile: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: vw(44),
        paddingTop: vh(25)
    },
    profileImg: {
        height: vh(84),
        width: vw(84),
        borderRadius: vw(100)
    },
    userName: {
        fontSize: vw(14),
        fontWeight: '700',
        lineHeight: vw(19),
        color: colors.BLACK,
        paddingTop: vh(7),
        paddingBottom: vh(4)
    },
    phoneNo: {
        fontSize: vw(12),
        fontWeight: '400',
        lineHeight: vw(15),
        color: colors.DARKGRAY
    },
    icon: {
        height: vh(40),
        width: vw(40),
        borderRadius: vw(100),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.LIGHTGRAY
    },
    iconImg: {
        height: vh(18),
        width: vw(18)
    },
    title: {
        fontSize: vw(14),
        fontWeight: '600',
        lineHeight: vw(14),
        color: colors.BLACK,
        marginLeft: vw(18)
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: vw(22)
    },
    editBtn: {
        height: vh(17),
        width: vw(17),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vw(100),
        borderWidth: vw(1),
        borderColor: colors.WHITE,
        backgroundColor: colors.ORANGE,
        position: 'absolute',
        right: 130,
        bottom: 100
    },
    EditImg: {
        height: vh(7),
        width: vw(7)
    },
    logout: {
        fontSize: vw(14),
        fontWeight: '600',
        lineHeight: vw(14),
        color: colors.ORANGE,
        marginLeft: vw(18)
    },
    logoutIcon: {
        height: vh(40),
        width: vw(40),
        borderRadius: vw(100),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.LIGHTORANGE
    }

})