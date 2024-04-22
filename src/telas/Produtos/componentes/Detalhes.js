import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Alert} from 'react-native';

import Texto from '../../../componentes/Texto' //Componente de Exibição de Texto
import Botao from '../../../componentes/Botao' //Componente de Botão

export default function Detalhes({nome, logo, detalhes, preco, botao}){
    return <View style={styles.produto}>
            <View style={styles.logotipo}>
              <Image source={logo} style={styles.logo} resizeMode='contain'/>
              <Texto style={styles.nome}>{nome}</Texto>
            </View>
            <Texto style={styles.descricao}>{detalhes}</Texto>
            <Texto style={styles.preco}>{preco}</Texto>
            <Botao textoBotao={botao} clickBotao={()=>{Alert.alert("Em breve!", "Estamos preparando uma nova função para você!")}}/>
          </View>
}

const styles = StyleSheet.create({
    produto: {
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    nome: {
      color: "purple",
      fontSize: 26,
      fontWeight: "bold",
      paddingTop: 25,
      paddingLeft: 10,
    },
    descricao: {
      color: "gray",
      fontSize: 18,
    },
    preco: {
      color: "#2A9F85",
      fontSize: 26,
      fontWeight: "bold",
      marginTop: 8
    },
    logo: {
      width: 100,
      height: 100,
    },
    logotipo: {
      flexDirection: "row",
    },
  });