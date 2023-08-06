import { useState, useEffect } from 'react';
import { TOKEN } from '../App';
import { useParams } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage';
import Talkback from './talkbacks/Talkback';

export default function ArticlePage() {
    const [article, setArticle] = useState();
    const [error, setError] = useState(false);
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`https://api.shipap.co.il/articles/${id}?token=${TOKEN}`)
        .then(res => res.json())
        .then(data => setArticle(data))
        .catch(() => setError(true));
    }, []);

    return (
        <div className="ArticlePage">
            {
                article ?
                <div className='article'>
                    <h3>{article.headline}</h3>
                    <p>{article.description}</p>
                    <img src={article.imgUrl} width="100%" />
                    <p>{article.content}</p>

                    <Talkback />
                </div> : 
                (error ? <ErrorPage /> : <p className='article'>טוען...</p>)
            }
        </div>
    )
}