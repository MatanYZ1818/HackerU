import {TOKEN} from "../App"
import './Talkback.css';
import { useState } from 'react';

export default function TalkbacksForm({ articleId, parent }) {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        name:"",
        comment:""
    });

    const addComment = () => {
        fetch(`https://api.shipap.co.il/articles/${articleId}/talkbacks?token=${TOKEN}`, {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                ...formData,
                parent,
            }),
        })
        .then(res => res.json())
        .then(data => {

        });
    }

    return (
        <div className='TalkbacksForm'>
            <form onSubmit={addComment}>
                <label></label>
            </form>
        </div>
    )
}