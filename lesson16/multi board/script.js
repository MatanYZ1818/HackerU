//לוח הכפל
for (let y = 1; y <= 10; y++) {
    for (let x = 1; x <= 10; x++) {
        const div = document.createElement("div");
        div.addEventListener("click",function(ev){
            console.log(ev.target.classList.toggle("toggleCell"))
        })
        div.innerHTML = x * y;
        document.getElementById("board").appendChild(div);
    }
}
