import React from "react";
import { ScrollView, Image, StyleSheet } from "react-native";

import Texto from '../../componentes/Texto'
import Styles from './estilos'

export default function Index({textos}){
    return <ScrollView style={Styles.sobre}>
    <Image source={textos.logo} style={Styles.logo} resizeMode="contain"></Image>
    <Texto style={Styles.textoSobre}>{textos.historia}</Texto>
    <Image source={textos.img_producao} style={Styles.fotoFitas} resizeMode="contain"/>
    <Texto style={Styles.textoSobre}>{textos.texto_imagem}</Texto>
</ScrollView>
}