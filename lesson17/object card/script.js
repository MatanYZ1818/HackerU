const elem=document.querySelector(".row")

for(const student of students){
    elem.innerHTML+=`
    <div class="col-sm-4" p-2 cardFrame>
        <div class="card">
            <div class="card-body">
                <h1>${student.firstName} ${student.lastName}</h1>
                <p>${student.phone}</p>
                <p>${student.email}</p>
                <button class="btn btn-danger" onclick="remove(this)">מחק</button>
            </div>
        </div>
    </div>
    `
}

function remove(element){
    console.log(element)

    while(!element.className.includes("cardFrame")&&element){
        element=element.parentElement
    }
}