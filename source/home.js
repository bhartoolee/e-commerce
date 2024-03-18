import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Footer from "./footer";
import heart from '../assets/favourite.png'
import check from '../assets/check.png'
import add from '../assets/add.png'
import discount from '../assets/discount.png'
import star from '../assets/star.png'

const home = (props) => {
    return (
        <View style={style.container}>
            <View style={style.first}>
                <Image
                    style={style.icon}
                    source={star}
                />
            </View>


            <View style={style.wrapper}>
                <View style={style.inside}>
                    <Text style={style.header}>Congratulation My Online</Text>
                    <Text style={style.header}>Shop</Text>
                </View>

                <View style={style.ipics}>
                    <Image
                        style={style.nav}
                        source={heart}
                    />
                </View>
            </View>

            <Image
                style={style.preview}
                source={discount}
            />

            <View style={style.order}>
                <View style={style.img}>
                    <Image
                        style={style.increment}
                        source={add}
                    />
                </View>
                <View style={style.img}>
                    <Image
                        style={style.increment}
                        source={check}
                    />
                </View>

            </View>

            <TouchableOpacity style={style.buttons}>
                <Text style={style.inner}>BUY NOW</Text>
            </TouchableOpacity>

            <Footer />

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        // alignItems: 'center',
        // justifyContent:'center',
        marginTop: 10
    },
    first: {
        alignItems: 'center'
    },
    icon: {
        width: 50,
        height: 50,
        marginVertical: 30,
        alignItems: 'center'
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 4,
        padding: 4,
        justifyContent: 'center',
        marginHorizontal: 10,
        borderColor: 'rgba(110, 149, 127, 0.2)'
    },
    inside: {
        marginHorizontal: 40,
    },
    header: {
        fontWeight: "bold",
    },
    ipics: {
        padding: 4,
        backgroundColor: 'rgba(255, 224, 204, 0.91)',
        borderRadius: 10,
        marginBottom: 8
    }
    ,
    nav: {
        width: 7,
        height: 7,
        borderRadius: 10,
    },
    preview: {
        width: 200,
        height: '40%',
        marginVertical: 20,
        marginHorizontal: 70
    },
    order: {
        flexDirection: 'row',
        marginVertical: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        borderRadius: 20,
        backgroundColor: 'rgba(255, 224, 204, 0.91)',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5
    },
    increment: {
        width: 15,
        height: 15,
    },
    buttons: {
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 30,
        padding: 8,
        marginBottom: 10,
        marginHorizontal: 10
    },
    inner: {
        color: '#fff'
    }
})

export default home