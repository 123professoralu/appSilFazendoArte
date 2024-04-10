import { useFonts, SpaceGrotesk_300Light, SpaceGrotesk_700Bold} from '@expo-google-fonts/space-grotesk';
import {View} from "react-native";

import ProdutoItem from './src/telas/Produtos'
import mock from './src/mocks/produto'

export default function App() {

  //Carrega a fonte para dentro do projeto
  const [ fonteCarregada ] = useFonts ({"SpaceGroteskRegular" : SpaceGrotesk_300Light, 
                                        "SpaceGroteskBold" : SpaceGrotesk_700Bold});

  //Se a fonte não tiver sido carregada, não exibe o projeto
  if(!fonteCarregada) {
    return <View />
  }
  return <ProdutoItem {...mock} />
}