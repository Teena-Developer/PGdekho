import { View, Text, StyleSheet, SafeAreaView, SectionList } from 'react-native'
import React from 'react'
import CustomNotificationCard from '../../components/CustomNotificationCard';
import { vw } from '../../utils/dimensions';
import colors from '../../utils/colors';

export default function Notification() {
    const DATA = [
        {
            title: 'Today',
            data: [
                {
                    img: 'https://lenstax.com/auth/app-assets/images/profile/user-uploads/user-04.jpg',
                    title: 'Lorem Ipsum',
                    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                {
                    img: 'https://lenstax.com/auth/app-assets/images/profile/user-uploads/user-04.jpg',
                    title: 'Lorem Ipsum',
                    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                }
            ],
        },
        {
            title: 'Yesterday',
            data: [
                {
                    img: 'https://lenstax.com/auth/app-assets/images/profile/user-uploads/user-04.jpg',
                    title: 'Lorem Ipsum',
                    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                {
                    img: 'https://lenstax.com/auth/app-assets/images/profile/user-uploads/user-04.jpg',
                    title: 'Lorem Ipsum',
                    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                {
                    img: 'https://lenstax.com/auth/app-assets/images/profile/user-uploads/user-04.jpg',
                    title: 'Lorem Ipsum',
                    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                {
                    img: 'https://lenstax.com/auth/app-assets/images/profile/user-uploads/user-04.jpg',
                    title: 'Lorem Ipsum',
                    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                }
            ],
        }
    ];

    const renderItem = (item: any) => {
        console.log(item)
        return (
            <CustomNotificationCard title={item?.item?.title ?? null} subtitle={item?.item?.subtitle ?? null} img={item?.item?.img ?? null} />
        )
    }

    const keyExtractor = (item: any, index: number) => index?.toString()


    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={DATA}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                renderSectionHeader={({section: { title }}) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        paddingHorizontal: vw(23),
        paddingVertical: vw(15)
    },

    header: {
        fontSize: vw(14),
        fontWeight: '600',
        marginBottom: vw(21),
        color: colors.BLACK
    },

})