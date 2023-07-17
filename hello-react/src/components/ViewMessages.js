import { useEffect, useState } from "react";
import "./ViewMessages.css"

export default function ViewMessages(){

    const [messages,getMessages]=useState([])

    useEffect(()=>{
        fetch("https://api.shipap.co.il/contact")
        .then(res => res.json())
        .then(data => {
            getMessages(data);
            console.log(data)
        });
    },[])
    
    return(
    <div className="MessageFrame">
        {
            messages.map((message)=>{
                return(
                    <div key={message.id} className="Message">
                        <p><b>זמן יצירה:</b> {message.createTime}</p>
                        <p><b>שם משתמש:</b> {message.fullName} </p>
                        <p><b>טלפון:</b> {message.phone} </p>
                        <p><b>מייל:</b> {message.email} </p>
                        <p><b>גוף ההודעה:</b> {message.message} </p>
                    </div>
                )
            })
        }
    </div>
    )
}