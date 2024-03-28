let wrapper=document.querySelector(".wrapper")
let main=document.querySelector("main")

let count=16

let wrapperWidth=((count*30)+(count*2))+ "px"
wrapper.style.width=wrapperWidth


let newGridButton=document.createElement("button")
newGridButton.textContent="New grid?"
newGridButton.style.width="80px"
newGridButton.style.height="50px"
main.appendChild(newGridButton)

newGridButton.addEventListener("click",createNewGrid)

function createNewGrid(){
    count=window.prompt("How big you want to be your new GRID?");
    if(count<=100){
        wrapper.textContent=""
        wrapperWidth=generateWrapperWidth(count)
        wrapper.style.width=wrapperWidth
         createGrid(count)
    }
    else{
        window.alert("Invalid Parameter")
    }

}

function generateWrapperWidth(count){
    return ((count*30)+(count*2))+ "px"
}

function createBox(){
    let divElement=document.createElement("div")
    divElement.classList="box"
    divElement.style.width="30px"
    divElement.style.height="30px"
    divElement.style.border="1px solid black"
    divElement.style.backgroundColor = "#e4572e"
    
    return divElement
}

function createGrid(count){
    for(let i=0;i<Math.pow(count, 2);i++){
        wrapper.appendChild(createBox())
    }
    document.querySelectorAll(".box").forEach(box=>box.addEventListener("mouseover",changeEnterColor))
    document.querySelectorAll(".box").forEach(box=>box.addEventListener("mouseleave",changeLeaveColor))
}

function changeEnterColor(e){

    let target=e.target
    target.style.backgroundColor= "#17bebb" 
}

function changeLeaveColor(e){
    //console.log(e)
    let target=e.target
    target.style.backgroundColor= "#e4572e" 
}

createGrid(count)
