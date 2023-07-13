import { useState } from 'react';
import { users } from './UsersData';
import "./UsersCards.css"
import moment from 'moment';

function UsersCards(){
    const [data, setData] = useState(users)

    const removeUser = (userId) => {
        const newArr = data.filter(user => user.id !== userId);

        setData(newArr);
    };

    return(
        <div className="cardFrame">
            {
                data.map(user=>{
                return(
                        <div className="card">
                            <p>{user.firstName} {user.lastName}</p>
                            <p><b>טלפון: </b>{user.phone}</p>
                            <p><b>אימייל: </b>{user.email}</p>
                            <p><b>תאריך לידה: </b>{moment(user.birthday).format('DD/MM/yyy')}</p>
                            <button className="remove" onClick={() => removeUser(user.id)}>❌</button>
                        </div>
                    )
                })
            }
        </div>
        
    )
}

export default UsersCards