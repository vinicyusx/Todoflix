import React from 'react';

import filme1 from "./image/filme1.png"
import filme2 from "./image/filme2.png"
import filme3 from "./image/filme3.png"
import filme4 from "./image/filme4.png"


export default class Shows extends React.component{
    render(){
        return(
            <div>
             <ul>
              <img src={filme1} alt="">
              <h1>Shrek</h1>
              <p>Para resgatar uma princesa das 
              garras de um dragão que cospe fogo, o ogro Shrek se 
              une a um companheiro improvável: um burro brincalhão.</p>
              </img>
              <img src={filme2} alt="">
              <h1>Hoje Eu Quero Voltar…</h1>
              <p>Um novo colega de sala transforma a vida do estudante Leonardo,
               que também é cego,
                e complica sua amizade com sua melhor amiga.</p>
              </img>
              <img src={filme3} alt="">
              <h1>Spider-man</h1>
              <p>Após ser picado por uma aranha radioativa,
               o garoto Miles Morales logo aprende a lançar 
              teias com seus parceiros de um universo alternativo.</p>
              </img>
              <img src={filme4} alt="">
              <h1>Um Sonho de Liberdade</h1>
              <p>Condenado pelo assassinato da esposa
               e do amante dela, um banqueiro se apega à esperança e à 
              amizade com um detento chamado Red para sobreviver à prisão.</p>
              </img>
             </ul>
            
            </div>

        )
    }
}