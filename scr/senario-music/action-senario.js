import { senarioMusic } from "./elements-senario.js";
import * as eventSenario from "./events-senario.js"
import * as sounds from "./sounds-senario.js"


export function toggleSelect(){
    senarioMusic.addEventListener('click', (event)=>{

        let music = ''
        if(event.target.dataset.atribute){
            music = event.target.dataset.atribute
            eventSenario.musicStop(music)
            eventSenario.removerSelect()
            sounds.senario[music].loop = true
            sounds.senario[music].play()
            event.target.setAttribute('id', 'toggle-select')
            sounds.senario.musicOn = true
        }else{
            return
        }

        sounds.senario[music].pause()
    })

}


