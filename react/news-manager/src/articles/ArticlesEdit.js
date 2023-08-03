import { useEffect, useState } from 'react';
import './Articles.css';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';

export default function ArticlesEdit() {
    const { id } = useParams();
    const [item, setItem] = useState();

    useEffect(() => {
        if (id == 'new') {
            setItem({
                publishDate: '',
                headline: '',
                description: '',
                content: '',
            });
        } else {
            fetch(`https://api.shipap.co.il/articles/${id}`, {
                credentials: 'include',
            })
            .then(res => res.json())
            .then(data => setItem(data));
        }
    }, []);

    const handleINput=ev=>{
        const{name,value}=ev.tartget

        setItem({
            ...item,
            [name]:value
        })
    }

    return (
        <div className='ArticlesEdit'>
            <button className='returnLink'>
                <Link to="/"><AiOutlineRight /> חזרה לרשימת הכתבות</Link>
            </button>

            {
                item &&
                <>
                    <h2>{item.id ? 'עריכת' : 'הוספת'} כתבה</h2>

                    <form>
                        <label>
                            כותרת
                            <input type='text' name='headline' value={item.headline} onChange={handleINput}></input>
                        </label>
                        <label>
                            תיואר
                            <textarea name='description' cols="30" rows="5" value={item.description} onChange={handleINput}></textarea>
                        </label>
                        <label>
                            תוכן
                            <textarea name='content' cols="30" rows="10" value={item.content} onChange={handleINput}></textarea>
                        </label>
                    </form>
                </>
            }
        </div>
    )
}