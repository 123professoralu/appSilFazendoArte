import {useFonts, SpaceGrotesk_300Light, SpaceGrotesk_700Bold} from '@expo-google-fonts/space-grotesk';
import { View } from 'react-native';

import Produto from './src/telas/Produtos/';
import mock from './src/mocks/produto';

export default function App() {

//Carrega a fonte para o projeto
const [ fonteCarregada ] = useFonts({
  "SpaceGRegular" : SpaceGrotesk_300Light,
  "SpaceGBold" : SpaceGrotesk_700Bold,
})

  //Checa se as fontes já foram carregadas
  if(!fonteCarregada){
    return <View />
  }

  return <Produto {...mock}/>
}