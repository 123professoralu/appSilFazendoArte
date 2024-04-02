import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Alert} from 'react-native';

import Texto from '../../../componentes/Texto' //Componente de Exibição de Texto

export default function Detalhes({nome, logo, detalhes, preco}){
    return <View style={styles.produto}>
            <View style={styles.logotipo}>
              <Image source={logo} style={styles.logo} resizeMode='contain'/>
              <Texto style={styles.nome}>{nome}</Texto>
            </View>
            <Texto style={styles.descricao}>{detalhes}</Texto>
            <Texto style={styles.preco}>{preco}</Texto>
            <TouchableOpacity style={styles.botao} onPress={() => {Alert.alert("Lista de Desejos!", "Em breve a funcionalidade da Lista de Desejos estará disponível!")}}>
              <Texto style={styles.botaoTexto}>Adicionar na Lista de Desejos</Texto>
            </TouchableOpacity>
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
    }
  });