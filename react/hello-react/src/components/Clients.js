import { useState,useEffect } from 'react';
import {clients} from "./ClientsData"
import "./Clients.css"
import moment from 'moment';

function Clients(){
    const [data,setClients]=useState(clients)

    useEffect(() => {
        fetch("https://api.shipap.co.il/clients")
            .then(res => res.json())
            .then(data => setClients(data))

        return () => console.log('WillUnmount');
    }, []);

    function classToggle(clientId){
        const list=[...clients]
        const client=list.find(x=>x.id===clientId)

        client.isActive=!client.isActive

        setClients(list)
    }

    return(
        <div className="cardFrame">
            {
                data.map((client)=>{
                    return(
                        <div key={client.id} onClick={()=>classToggle(client.id)} className={"card" + (client.isActive ? "active" : "")}>
                            <p>{client.firstName} {client.lastName}</p>
                            <p><b>טלפון: </b>{client.phone}</p>
                            <p><b>אימייל: </b>{client.email}</p>
                            <p><b>תאריך לידה: </b>{moment(client.birthday).format('DD/MM/yyy')}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Clients