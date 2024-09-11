import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/Comparametro'
import Fragmento from './components/basicos/Fragmentos'

export default function App(props){
    return(
        <div id='app'>
            <h1>Fundamentos</h1>
        <Primeiro>
        </Primeiro>
        {/*como pode ver o componente é chamado como uma tag*/}
        <ComParametro titulo="bacana"
        subtitulo="interessante" 
        nota1={ 8 }/>
        <Fragmento />
     </div>
    );
}