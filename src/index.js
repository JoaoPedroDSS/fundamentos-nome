import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/Comparametro'

const tag = 'olá mundo'
ReactDOM.render(
    <div>
       <Primeiro>
       </Primeiro>
       {/*como pode ver o componente é chamado como uma tag*/}
       <ComParametro titulo="bacana" subtitulo="interessante" nota1={ 8 }/>
    </div>,
    document.getElementById('root')
)

//ReactDOM.render('Olá React!!!', elemento)
//render está obsoleto
//duas formas de usar o elemento