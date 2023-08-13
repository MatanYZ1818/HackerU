import './Talkbacks.css';
import { useState, useEffect } from 'react';
import TalkbacksForm from './TalkbacksForm';
import { TOKEN } from '../App';
import moment from 'moment';

export default function Talkbacks({ articleId ,children,level}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.shipap.co.il/articles/${articleId}/talkbacks?token=${TOKEN}`)
        .then(res => res.json())
        .then(data => {
            const dictionary={}

            data.forEach(x=>{
                if(dictionary[x.parent]){
                    dictionary[x.parent]=[]
                }

                dictionary[x.parent].push(x)
            })

            data.forEach(x=>{
                x.children = dictionary[x.id] || []
            })

            console.log(dictionary)
        });
    }, []);

    const commentToggle = item => {
        item.isShowComment = !item.isShowComment;
        setData([...data]);
    }

    const addChild = item=>{
        item.children.push(item)
        setData([...data])
    }

    return (
        <div className='Talkbacks'>
            {children ? "":<h3>תגובות</h3>}

            {
                !data.length ?
                <>
                    <TalkbacksForm articleId={articleId} added={item=>setData([...data,item])}/>
                </> :
                data.map((t, i) => 
                <div key={t.id} style={{paddingRight: level*20}}>
                    <div key={t.id} className='talkbackContainer'>
                        <div className='grid'>
                            <div>{i + 1}</div>
                            <div>{t.name} <i>({moment(t.time).format('DD/MM/Y H:mm')})</i></div>
                            <div className='btnFrame'>
                                <button onClick={() => commentToggle(t)}>הגב</button>
                            </div>
                            <div className='content'>{t.comment}</div>
                        </div>

                        {t.isShowComment && <TalkbacksForm articleId={articleId} parent={t.id} added={item=>addChild(t.children,item)} />}
                    </div>

                    {t.children.length? <Talkbacks articleId={articleId} children={t.children} level={level+1}/> : ""}
                </div>
                    
                )
            }
        </div>
    )
}