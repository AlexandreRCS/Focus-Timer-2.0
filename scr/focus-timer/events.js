import * as ele from "./elements.js"


export function toggleRunning (){
    ele.controls.addEventListener('click', (event)=>{
    console.log(event.target.dataset.action)
})
}