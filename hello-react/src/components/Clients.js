import { useState,useEffect } from 'react';
import "./Client.css"
import {clients} from "./ClientsData"

function Clients(){
    const [data,setClients]=useState([])

    useEffect(() => {
        fetch("https://api.shipap.co.il/clients")
            .then(res => res.json())
            .then(data => setClients(data));

        return () => console.log('WillUnmount');
    }, []);

    return(
        <>
            {
                data.map((client)=>{
                    return(
                        <div className="card">
                            <p>{client.firstName} {client.lastName}</p>
                            <p><b>טלפון: </b>{client.phone}</p>
                            <p><b>אימייל: </b>{client.email}</p>
                            <p><b>תאריך לידה: </b>{moment(client.birthday).format('DD/MM/yyy')}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Clients