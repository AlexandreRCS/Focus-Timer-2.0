import * as ele from "./elements-senario.js"
import { senario } from "./sounds-senario.js";

export function removerSelect(){
    let btn = ele.btnSenario
    btn.forEach(element => {
        element.removeAttribute('id')
    });

}

export function musicStop(musi){
    if(senario.musicOn){
        senario[musi].pause()
        senario.musicOn = false
    }
}