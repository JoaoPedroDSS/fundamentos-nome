import React from "react";

export default function Fragmento(props){
    return(
        <React.Fragment>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro</p>
            {/*se vc deixar sem div dá erro, mas vc pode usar o React Fragment para que não tenha erro, ou deixar vazio, mas se quiser colocar um valor precisa do fragment*/}
        </React.Fragment >
    )
}