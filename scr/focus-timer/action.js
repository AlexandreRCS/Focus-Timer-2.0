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
    let timerON = Number(ele.minutes.textContent)
    ele.minutes.textContent = timerON + state.plus
    timerON = 0
}

