function showStudents(students) {
    const ol = document.createElement('ol');

    for (const s of students) {
        const li = document.createElement('li');
        li.innerHTML = `${s.firstName} ${s.lastName}`;

        ol.appendChild(li);
    }

    document.querySelector(".frame").appendChild(ol);
}

function studentsCards(students){
    const cardsWrapper=document.getElementById("cardsWrapper")
    for (const s of students){
        const div=document.createElement("div")
        div.innerHTML=`${s.firstName} ${s.lastName}`;

        cardsWrapper.appendChild(div)
    }
}

/////////////////////// אופציה 1 ////////////////////////
fetch("students.json")
    .then(response => response.json())
    .then(showStudents)
    .then(studentsCards);

/////////////////////// אופציה 2 ////////////////////////
// fetch("students.json")
//     .then(response => response.json())
//     .then(students => showStudents(students));

/////////////////////// אופציה 3 ////////////////////////
// כתבנו בפנים ישירות את הפונקציה
// fetch("students.json")
//     .then(response => response.json())
//     .then(students => {
//         const ol = document.createElement('ol');
    
//         for (const s of students) {
//             const li = document.createElement('li');
//             li.innerHTML = `${s.firstName} ${s.lastName}`;
    
//             ol.appendChild(li);
//         }
    
//         document.querySelector(".frame").appendChild(ol);
//     });