import './Talkback.css';
import { useState, useEffect } from 'react';
import TalkbacksForm from './TalkbacksForm';
import {moment} from "moment"

export default function Talkback({ articleId }) {
    const [data, setData] = useState([]);


    return (
        <div className='Talkbacks'>
            <h3>תגובות</h3>

            {
                !data.length ?
                <>
                    <p>היה הראשון להגיב!</p>
                    <TalkbacksForm articleId={articleId} />
                </> :
                data.map((t,i) => 
                    <div className='talkbackContainer'>
                        <div className='grid'>
                            <div>{i+1}</div>
                            <div>{t.name}<span></span></div>
                            <div className='btnFrame'>
                                <button>הגב</button>
                            </div>
                            <div className='content'>{t.comment}</div>
                        </div>

                        <TalkbacksForm articleId={articleId} parent={t.id} />
                    </div>    
                )
            }
            
        </div>
    )
}