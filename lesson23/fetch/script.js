let students=[]

function showStudents (displayType){
    const elem=document.querySelector(".students")
    elem.innerHTML=""
    if (displayType==="table"){
        const table=document.createElement("table")
        students.forEach(s=>{
            const tr=document.createElement("tr")

            tr.innerHTML=`
            <td>${s.firstName}</td>
            <td>${s.lastName}</td>
            <td>${s.phone}</td>
            <td>${s.email}</td>
            <td>${s.birthday}</td>
            <td>${s.city}</td>`

            table.appendChild(tr)
        })
        elem.appendChild(table)
    }
    else if(displayType==="cards"){
        const cardsWrapper=document.createElement("div")
        cardsWrapper.classList="studentsCards"
        for (const s of students){
            const div=document.createElement("div")
            div.innerHTML=`
            <h3>${s.firstName} ${s.lastName}</h3>
            <p><b>טלפון</b> ${s.phone}</p>
            <p><b>אימייל</b> ${s.email}</p>
            <p><b>תאריך לידה</b> ${s.birthday}</p>
            <p><b>עיר</b> ${s.city}</p>`;
    
            cardsWrapper.appendChild(div)
        }
        elem.appendChild(cardsWrapper)
    }
    else if(displayType==="list"){
        const ol = document.createElement('ol');

        for (const s of students) {
            const li = document.createElement('li');
            li.innerHTML = `${s.firstName} ${s.lastName}`;

            ol.appendChild(li);
        }

        elem.appendChild(ol);
    }
}


fetch("students.json")
    .then(response => response.json())
    .then(data=>{
        students=data;
        showStudents("cards");
    });

function colorLabel(labelElem){
    document.querySelectorAll("header label").forEach(label=>{
        label.className=""
    })

    labelElem.className="active"
}

document.querySelectorAll("header input[type=radio]").forEach(input=>{
    input.addEventListener("change",ev=>{
        colorLabel(ev.target.parentElement);
        console.log(ev.target.value)
        showStudents(ev.target.value)
    })
})