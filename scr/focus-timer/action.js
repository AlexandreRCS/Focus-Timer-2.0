import * as ele from "./elements.js"
import state from "./state.js"
import * as timer from "./timer.js"

export function stop(){
    if(state.isRunning){
        ele.minutes.textContent = "01"
        ele.seconds.textContent = "00"

    }

    return
}

export function plus(){
    let timerOn = Number(ele.minutes.textContent)
    if(timerOn > 94){
        timerOn = 94
    }
    ele.minutes.textContent = String(timerOn + state.plus ).padStart(2, "0")
    timerOn = 0
}

export function minus(){
    let timerOn = Number(ele.minutes.textContent)
    if(timerOn < 5){
        return
    }
    ele.minutes.textContent = String(timerOn + state.minus).padStart(2, "0")
    timerOn = 0
}

export function play(){
    timer.countDown()
}