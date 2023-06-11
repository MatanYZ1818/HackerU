function color(elem){
    document.body.style.background=elem.value
    
    document.cookie=elem.value

    document.body.style.backgroundImage="linear-gradient(#cb7de7, #3fcd80);"
}

if(document.cookie){
    document.body.style.background=document.cookie
}