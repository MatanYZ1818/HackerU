let students = [
    "אברהם מזרחי גיא",
    "בנדרקר סטיב",
    "גל תומר",
    "דוד יובל",
    "הרשקוביץ רותם",
    "זכריה מתן",
    "יוחנוק איתי",
    "מאיקל כרם",
    "לוי אביתר",
    "פצ׳ן מריה",
    "צ׳וגאי גלב",
    "צבטקוב מקסים",
    "קבלו אלון",
    "קזס עידו",
    "קטייב ליטל",
    "רבין שי",
    "רגב אדם ",
    "שטיינברג מאיה",
    "שיבלי יסמין",
    "שליט לארס",
    "שפירא אביב"
];
//רשימה שמית
function showList(){
    const ul=document.querySelector(`ul`)
    ul.innerHTML=""

    for(let i=0;i<students.length;i++){
        const li=document.createElement("li")
        li.innerHTML=students[i]
        li.addEventListener('click',function(ev) {
            console.log(ev.target)

            //ev.target.remove()
        })

        ul.appendChild(li)
    }
}
showList()

function random(){
    let arr=[]
    const len=students.length;

    for(let i=0;i<len;i++){
        const rand=Math.floor(Math.random()*students.length);
        arr.push(students[rand])
        students.splice(rand,1)
    }
    students=arr
    showList()
}

function sortASC(){
    students.sort()
    showList()
}

function sortDESC(){
    students.sort()
    students.reverse()
    showList()
}

function raffle(){
    const winner=Math.floor(Math.random()*students.length)
    console.log(students[winner])
    alert(students[winner])
}


//חיפוש ברשימה
function search(){
    const word=document.querySelector(`input`).value
    const ul=document.querySelector(`ul`)
    ul.innerHTML=""

    for(let i=0;i<students.length;i++){
        let studentName=students[i]

        if(studentName.includes(word)){
            const li=document.createElement("li")
            if(word){
                studentName=studentName.split(word).join("<mark>${word}</mark>")
            }
            li.innerHTML=studentName
            ul.appendChild(li)
        }
    }
}

