const task1 = document.querySelector('#task1');
const task2 = document.querySelector('#task2');
const task3 = document.querySelector('#task3');
const task4 = document.querySelector('#task4');


task1.querySelector('button').addEventListener('click', function() {
    const rand = Math.random();
    const res = Math.floor(rand * 50) + 1;
    task1.querySelector('p').innerHTML = res;
});

task2.querySelector('button').addEventListener('click', function() {
    const ranInput=document.querySelector(`input`).value
    const res = Math.floor(Math.random()*ranInput) + 1;
    task2.querySelector('p').innerHTML = res;
});

task3.querySelector('button').addEventListener('click', function() {
    const inputs=document.querySelectorAll("input").values
    const min=inputs[0]
    const max=inputs[1] 
    console.log(min)
    const res = Math.floor(Math.random()*10) + 1;
    task3.querySelector('p').innerHTML = res;
});

const chars = ["א","ב","ג","ד","ה","ו","ז","ח","ט","י","כ","ל","מ","נ","ס","ע","פ","צ","ק","ר","ש","ת","ך","ם","ן","ף","ץ"," "];

task4.querySelector('button').addEventListener('click', function() {
    const len = task4.querySelector("input").value;
    let str = "";

    for(let i=0;i<len;i++){
        const rand=Math.floor(Math.random()*chars.length)
        str+=chars[rand]
    }
    task4.querySelector('p').innerHTML = str;
});