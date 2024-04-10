import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import Texto from './Texto'

export default function Botao({textoBotao, acaoBotao}){

    return <TouchableOpacity style={styles.botao} onPress={acaoBotao}> 
                <Texto style={styles.botaoTexto} >{textoBotao}</Texto>
            </TouchableOpacity>
}

const styles = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "purple",
        paddingVertical: 16,
        borderRadius: 6,
    },
    botaoTexto: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 20,
        lineHeight: 26,
        fontWeight: "bold",
    },
})