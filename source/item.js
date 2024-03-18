import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const item = (props) => {
    return (
        <View style={style.content}>
            <View style={style.container}>
                <View style={style.inner}>
                    <Image
                        style={style.image}
                        source={props.item}
                    />

                    <View style={style.wrapper}>
                        <Image
                            style={style.icon}
                            source={props.icon}
                        />
                    </View>

                </View>

                <Text style={style.name}>{props.name}</Text>
                <Text style={style.amount}>${props.amount}</Text>
            </View>

            <TouchableOpacity style={style.button}>
                <Text style={style.footer}>BUY NOW</Text>
            </TouchableOpacity>


        </View>
    )
}

const style = StyleSheet.create({
    content: {
        // marginBottom:5,
        paddingHorizontal: 12,
        paddingVertical:4,
        alignItems:'center',
    },
    container: {
        borderWidth: 1,
        borderColor: 'rgba(110, 149, 127, 0.2)',
        paddingHorizontal: 18,
        paddingVertical: 1,
        marginBottom: 6,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inner: {
        flexDirection: 'row'
    },
    image: {
        width: 70,
        height: 70,
        marginVertical: 10,
        marginLeft:6
    },
    wrapper: {
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(110, 149, 127, 0.2)',
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft:10
    },
    icon: {
        width: 15,
        height: 15,
    },
    name: {
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 2,
    },
    amount: {
        color: 'rgba(255, 67, 0, 0.91)'
    },
    button: {
        backgroundColor: 'rgba(255, 67, 0, 0.91)',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:8,
        paddingHorizontal:8,
        borderRadius:10,
        width:'70%'
    },
    footer:{
        color:'#fff'
    }
})

export default item