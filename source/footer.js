import React from "react";
import { View, StyleSheet, Image } from "react-native";
import home from '../assets/home.png'
import shop from '../assets/shop.png'
import people from '../assets/people.png'
import profile from '../assets/profile.png'

const footer = () => {
    return (
        <View style={style.container}>
            <Image
                style={style.icon}
                source={home}
            />
            <Image
                style={style.icon}
                source={shop}
            />
            <Image
                style={style.icon}
                source={people}
            />
            <Image
                style={style.icon}
                source={profile}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 224, 204, 0.91)',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 16
    },
    icon: {
        width: 15,
        height: 15,
    }
})

export default footer