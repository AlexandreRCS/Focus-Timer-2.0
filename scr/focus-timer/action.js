import * as ele from "./elements.js"
import state from "./state.js"

export function stop(){
    if(state.isRunning){
        ele.minutes.textContent = state.minutes
        ele.seconds.textContent = state.seconds
    }
    return
}

export function plus(){
    let timerOn = Number(ele.minutes.textContent)
    ele.minutes.textContent = timerOn + state.plus
    timerOn = 0
}

export function minus(){
    let timerOn = Number(ele.minutes.textContent)
    ele.minutes.textContent = timerOn + state.minus
    timerOn = 0
}