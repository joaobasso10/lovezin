const sim = document.getElementById("sim")
const nao = document.getElementById("nao")
const popup = document.getElementById("popup")

console.log("teste")


nao.addEventListener("click", ()=>{
    change()
})
sim.addEventListener("click", ()=>{
    popup.style.display = "flex"
})

function change(){

    let left = Math.floor(Math.random()*300);
    let right = Math.floor(Math.random()*300);

    nao.style.marginLeft = left + "px"
    nao.style.marginTop = right + "px"

    console.log(left)
}

