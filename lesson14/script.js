

function addToArray(ev){
    const numbers=[];
    const value=ev.target.value
    if(ev.keyCode===13 && value){
        numbers.push(value)
        console.log(numbers)
        ev.target.value=""
    }
}

function showNumBetween(){
    const num1=document.getElementById("num4").value
    const num2=document.getElementById("num5").value
    const numbers=[];

    const min=Math.min(num1,num2)
    const max=Math.max(num1,num2)

    for(let i=min;i<max;i++){
        numbers.push(i)
    }

    document.getElementById("output2").innerHTML=numbers.join(", ")
}

function factorial(){
    const num=document.getElementById("num6").value
    let calc=1

    for(i=1;i<=num;i++){
        calc*=i
    }

    document.getElementById("output3").innerHTML=calc
}