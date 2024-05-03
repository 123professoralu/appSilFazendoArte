import React from "react";
import {View, Image, StyleSheet} from "react-native"

import Texto from '../../../componentes/Texto'

export default function Item({item:{nome, imagem}}){
    return <View key={nome} style={styles.item}>
                <Image source={ imagem } style={styles.imagem} resizeMode="contain"/>
                <Texto style={styles.nome}>{ nome }</Texto>
            </View>
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        padding: 16,
        alignItems: "center",
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    },
    imagem: {
        width: 100,
        height: 100,
    }
})