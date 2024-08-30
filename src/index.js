import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'


const tag = 'olá mundo'
ReactDOM.render(
    <div>
        {tag}
        Olá React!
    </div>,
    document.getElementById('root')
)

//ReactDOM.render('Olá React!!!', elemento)
//render está obsoleto
//duas formas de usar o elemento