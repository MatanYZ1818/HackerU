
const names = [];

function getNames(children) {
    children.forEach(c => {
        names.push(c.name)

        if(c.children.length){
            getNames(c.children)
        }
    });
}

getNames([person]);

// task 1
document.querySelector("#task1 p").innerHTML = names.join(",")
//show numbers
document.querySelector("#people").innerHTML=person.join("|")
