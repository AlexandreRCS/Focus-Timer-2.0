import { senarioMusic, btnSenario } from "./elements-senario.js";
import * as eventSenario from "./events-senario.js"

export function toggleSelect(){
    senarioMusic.addEventListener('click', (event)=>{
       
        if(event.target.dataset.atribute){
            eventSenario.removerSelect()
            event.target.setAttribute('id', 'toggle-select')
        }else{
            return
        }
    })

}


