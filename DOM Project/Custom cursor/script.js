let main = document.querySelector("#main")
let cursor = document.querySelector(".cursor")

main.addEventListener("mousemove",(d)=>{
    cursor.style.left = d.x+"px"
    cursor.style.top = d.y+"px"

})