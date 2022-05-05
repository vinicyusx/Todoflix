import React from "react"
import filme from "./image/filme0.png"
import favorito from "./image/favorito.svg"
import like from "./image/like.svg"

export default class Body extends React.component{
  render(){
    return(
      <div>
    <img src={filme} alt=""/>
    <img src={favorito} alt=""/>
    <p>Visto recentemente</p>
    <h1>Capitao Fantástico</h1>
    <p>Nas florestas do estado de Washington,
     um pai cria seus seis filhos longe da civilização,
      em uma rígida rotina de aventuras. Ele é forçado a 
      deixar o isolamento e leva sua família para encarar 
    o mundo, desafiando sua ideia do que significa ser pai.</p>
    <img src={like} alt=""/>
    </div>
    )
  }
}