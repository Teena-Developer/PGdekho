import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import colors from '../utils/colors'
import { localImage } from '../utils/localImages'
import { vh, vw } from '../utils/dimensions'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props {
    navigation: any;
    title: string;
    description: string;

}
export default function Header(props: Props) {
    const backButton = () => {
        props?.navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={backButton}>
                <Image source={localImage.BACKBUTTON} />
            </TouchableOpacity>

            <Text style={styles.title}>{props?.title}</Text>

            <Text style={styles.description}>{props?.description}</Text>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.WHITE,
    },
    backButton: {
        marginLeft: vw(25),
        paddingHorizontal: vw(16.5),
        marginTop: vw(26),
        borderWidth: 1,
        paddingVertical: vh(13),
        alignSelf: 'flex-start',
        borderRadius: vw(7),
        borderColor: colors.LIGHTGRAY,
        marginBottom: vw(23)
    },
    title: {
        fontSize: vw(22),
        fontWeight: "700",
        color: colors.BLACK,
        paddingHorizontal: vw(27),
        marginBottom: vw(10)
    },
    description: {
        marginLeft: vw(27),
        marginBottom: vh(50),
        fontSize: vw(14),
        fontWeight: '400',
        color: colors.DARKGRAY,
        alignSelf:'flex-start'
    }
})