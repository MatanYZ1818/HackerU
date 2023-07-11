import { useState } from "react"

function Range({title, value,min,max,change}){
    console.log({title, value,min,max,change})

    const [num,setNum]=useState(value||100)

    function changeVal(val){
        setNum(val)
    }
    return(
        <div className="range">
            <label>{title || "ערך מסויים"}</label>

            <input type="range" min={min||0} max={max||100} value={num} onChange={ev => changeVal(ev.target.value)} />
            <input type="number" min={min||0} max={max||100} value={num} onChange={ev => changeVal(ev.target.value)} />
        </div>
    )
    
}
export default Range