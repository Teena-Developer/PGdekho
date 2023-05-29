import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import colors from '../../utils/colors'
import { vh, vw } from '../../utils/dimensions'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import ButtonComponent from '../../components/ButtonComponent'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { localImage } from '../../utils/localImages'

interface Props{
    navigation:any;
}
export default function SignUp(props:Props) {
    const LogIn = () =>{
        props?.navigation.navigate('Login')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ paddingHorizontal: vw(16)}}>
                <Image source={localImage.HOMEGROUP} style={styles.img} resizeMode='contain'/>
                <Text style={styles.title}>New Place, New Home!</Text>
                <Text style={styles.description}>Are you ready to uproot and start over in a new {'\n'}area? Placoo will help you on your journey! </Text>
                <ButtonComponent title={'Log in'} onPressCustomButton={LogIn} />
                <TouchableOpacity style={styles.signUpBtn}>
                    <Text style={styles.signUpBtnTxt}>sign up</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
    },
    img: {
        width: '100%',
        height:vh(508),
    },
    title: {
        textAlign: 'center',
        fontSize: vw(22),
        fontWeight: '700',
        color: colors.BLACK,
    },
    description: {
        fontSize: vw(14),
        fontWeight: '400',
        textAlign: "center",
        marginTop: vh(17),
        marginBottom: vw(32),
        color: colors.DARKGRAY
    },

    signUpBtn: {
        borderWidth: vw(1),
        borderColor: colors.GRAY,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: vw(10),
        marginTop: vh(12)
    },
    signUpBtnTxt: {
        fontSize: vw(16),
        fontWeight: '500',
        paddingVertical: vh(14),
        color: colors.BLACK,

    }
})