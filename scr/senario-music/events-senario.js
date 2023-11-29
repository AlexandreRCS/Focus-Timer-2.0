import * as ele from "./elements-senario.js"

export function removerSelect(){
    let btn = ele.btnSenario
    btn.forEach(element => {
        element.removeAttribute('id')
    });

}

