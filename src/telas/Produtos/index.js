import React from 'react';

import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes'

export default function Produto({topo, detalhes}){
    return <>
          <Topo {...topo} />
          <Detalhes {...detalhes} />
      </>
}