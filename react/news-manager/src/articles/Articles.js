import "./Articles.css"
import { useState, useEffect } from 'react';
import moment from 'moment';

export default function Articles(){
    
    const [data, setArticles] = useState()

    useEffect(() => {
        fetch("https://api.shipap.co.il/articles", {
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => {
            setArticles(data);
        });
    }, []);

    return(
    <div className="cardFrame">
        {
            data.map(article=>{
            return(
                    <div className="card">
                        <h4>{article.title}</h4>
                        <p><b>כותב: </b>{article.author}</p>
                        <p><b>תאריך פרסום: </b>{moment(article.birthday).format('DD/MM/yyy mm:hh')}</p>
                        <button className="edit" onClick={() => removeUser(article.id)}>📝</button>
                    </div>
                )
            })
        }
    </div>
    )
}
