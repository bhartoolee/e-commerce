import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Item from "./item";
import manu from '../assets/man utd.jpeg'
import juventus from '../assets/juventus.jpeg'
import chelsea from '../assets/chelsea.jpeg'
import mancity from '../assets/man city.jpeg'
import barca from '../assets/barca.jpeg'
import madrid from '../assets/madrid.jpeg'
import liverpool from '../assets/liverpool.jpeg'
import arsenal from '../assets/man utd.jpeg'
import Header from "./navigation";
import back from '../assets/back.png';
import menu from '../assets/menu.png';
import favourite from '../assets/favourite.png'
import heart from '../assets/heart.png'


const layOut = () => {
    return (
        <View style={style.container}>
            <Header
                back={back}
                description='Jersey Shop'
                icon={menu}
            />

            <View style={style.wrapper}>
                <Item
                    item={manu}
                    icon={favourite}
                    name='man utd jersey'
                    amount='250'
                />
                <Item
                    item={mancity}
                    icon={heart}
                    name='man city jersey'
                    amount='210'
                />
            </View>

            <View style={style.wrapper}>
                <Item
                    item={chelsea}
                    icon={heart}
                    name='chelsea jersey'
                    amount='250'
                />
                <Item
                    item={liverpool}
                    icon={heart}
                    name='liverpool jersey'
                    amount='250'
                />
            </View>

            <View style={style.wrapper}>
                <Item
                    item={arsenal}
                    icon={heart}
                    name='arsenal jersey'
                    amount='250'
                />
                <Item
                    item={barca}
                    icon={heart}
                    name='barca jersey'
                    amount='250'
                />
            </View>

            {/* <View style={style.wrapper}>
                <Item
                    item={madrid}
                    icon={heart}
                    name='madrid jersey'
                    amount='250'
                />
                <Item
                    item={juventus}
                    icon={heart}
                    name='juventus jersey'
                    amount='250'
                />
            </View> */}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical:20,
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    }
})

export default layOut