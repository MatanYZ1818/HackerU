import './Login.css';
import { useState } from 'react';
import { JOI_HEBREW } from './joi-hebrew';
import Joi from 'joi';

export default function Login(){
    const [login, setLogin] = useState(false);
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const contactSchema = Joi.object({
        userName: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(3).max(30).required()
    });

    

    const handleError = (ev) => {
        const obj = getObj(ev.target.closest('form'));
        const schema = contactSchema.validate(obj, { abortEarly: false, messages: { he: JOI_HEBREW }, errors: { language: 'he' } });
        const errors = {};

        if (schema.error) {
            for (const e of schema.error.details) {
                errors[e.context.key] = e.message;
            }

            setIsValid(false);
        } else {
            setIsValid(true);
        }

        setErrors(errors);
    }

    function checkLogin(){
        const obj = {
            userName: document.querySelector("#userName").value,
            password: document.querySelector("input[type=password]").value,
        };
    
        // שליחה לשרת
        fetch("https://api.shipap.co.il/login", {
            method: 'POST',
            credentials: 'include', // מאפשר שליחה וקבלה של עוגיות
            headers: {
                'Content-Type': 'application/json' // הגדרת סוג התוכן הנשלח לשרת
            },
            body: JSON.stringify(obj), // תוכן הקריאה לשרת
        })// קבלה מהשרת
        // *המרת התוכן לפי הצורך*
        .then(res => res.json())
        .then(setLogin(true))
    }

    return(
    <div className ="Login">
            <h2>התחברות לשרת</h2>

            {
                login ?
                <h3>התחברות בוצעה בהצלחה!</h3> :
                <form onSubmit={submit}>
                    <label>
                        שם משתמש:
                        <input type="text" id="userName" className={errors.userName ? 'fieldError' : ''} onChange={handleError} />
                    </label>

                    { errors.userName ? <div className='fieldError'>{errors.userName}</div> : '' }

                    <label>
                        סיסמא:
                        <input type='password' id="password" className={errors.password ? 'fieldError' : ''} onChange={handleError} />
                    </label>

                    <button disabled={!isValid} onClick={checkLogin}>התחבר</button>
                </form>
            }
        </div>
    )
    
}