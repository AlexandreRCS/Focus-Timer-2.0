import { senarioMusic } from "./elements-senario.js";
import * as eventSenario from "./events-senario.js"

export function toggleSelect(){
    senarioMusic.addEventListener('click', (event)=>{
        eventSenario.removerSelect()
        event.target.setAttribute('id', 'toggle-select')
    })

}