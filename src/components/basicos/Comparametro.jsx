import React from "react"
export default function ComParametro(props){
    const sub = props.subtitulo
    const status = props.nota1>=7 ? ' Aprovado ' : ' Recuperação '
    return <div>
        <h2>{props.titulo}</h2>
        <h3>{sub}</h3>
        <p>
            { props.nota1 }
             { status } 
        </p>
    {/*props é só leitura!
    quando vc colocar o valor de texto como os parametros/propriedades, vc pode passar valores pelo jsx do index*/}
    </div>
   
}