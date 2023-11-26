import state from "./state.js";
import * as ele from "./elements.js"
import { kichenTimer } from "./soundsControls.js";


export function updateScreen(minutes, seconds){

    clearTimeout(state.timerCount)
    
    if(!state.isRunning){
        return
    }
    
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    ele.minutes.textContent = String(minutes).padStart(2, "0")
    ele.seconds.textContent = String(seconds).padStart(2, "0")
}

export function countDown(){
    let minutes = Number(ele.minutes.textContent)
    let seconds = Number(ele.seconds.textContent)

    if(seconds > 59){
        seconds = 59
    }

    seconds--

    if(seconds < 0){
        seconds = 59
        minutes--
    }

    if(minutes < 0){
        kichenTimer.play()
        return
    }

    updateScreen(minutes, seconds)

    state.timerCount =  setTimeout(()=> countDown(), 1000)
}