import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto ({children, style}) {

    //Determina  a estilização padrão do texto
    let estilo = styles.texto;

    //Se tiver estilização personalizada, verifica se pede texto em negrito
    if(style?.fontWeight=="bold"){
        //Pede negrito, direciona estilização
        estilo = styles.textoNegrito;
    }

    return <Text style={[style, estilo]}>{children}</Text>
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: "KanitRegular",
        fontWeight: "regular",
    },
    textoNegrito: {
        fontFamily: "KanitBold",
        fontWeight: "regular",
    }
})