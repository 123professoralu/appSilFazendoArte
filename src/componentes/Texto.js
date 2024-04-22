import React from "react";
import {Text, StyleSheet} from "react-native";

export default function Texto({children, style}){

    //Define a estilização padrão do campo
    let estilo = styles.texto;

    //Verifica se deve exibir a fonte em negrito
    if(style?.fontWeight=="bold"){
        //Negrito, muda a estilização
        estilo = styles.textoNegrito;
    }

    return <Text style={[style, estilo]}>{children}</Text>
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: "SpaceGRegular",
    },
    textoNegrito :{
        fontFamily: "SpaceGBold",
        fontWeight: "normal",
    }
})