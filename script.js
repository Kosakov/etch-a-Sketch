let wrapper=document.querySelector(".wrapper")
let count=5
let wrapperWidth=((count*50)+(count*2))+ "px"
wrapper.style.width=wrapperWidth
console.log(wrapper)

function createDiv(){
    let divElement=document.createElement("div")
    divElement.classList="box"
    divElement.style.width="50px"
    divElement.style.height="50px"
    divElement.style.border="1px solid blue"
    
    return divElement
}

function createGrid(count){
    for(let i=0;i<Math.pow(count, 2);i++){
        wrapper.appendChild(createDiv())
        document.querySelector(".box").addEventListener("mouseover",changeColor)
    }
    

}

function changeColor(e){
    console.log(e)
    let target=e.target
    target.style.backgroundColor = "lightblue";
}

createGrid(count)
