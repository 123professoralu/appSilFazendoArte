import React from "react";
import {Image, View, StyleSheet} from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Item({item:{id,nome,imagem}}){
    return <View key={id} style={styles.item}>
        <Image source={imagem} style={styles.imagem} resizeMode="contain"/>
        <Texto style={styles.nome}>{nome}</Texto>
    </View>
}

const styles = StyleSheet.create({
    item: {
        flexDirection:"row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center",
    },
    nome: {
        fontSize: 18,
        color: "#464646",
        lineHeight: 26,
        marginLeft: 11,
    },
    imagem: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginLeft: 10,
    }
})