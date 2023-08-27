import './Users.css';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { AiFillDislike, AiFillLike, AiFillEdit, AiOutlineRight, AiOutlineLeft, AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BsFillTrash3Fill } from 'react-icons/bs';

export default function Users() {
    const [grades, setGrades] = useState([]);
    const [formDate,setFormData]=useState({
        grade:'',
        title:"",
        grade:""
    })

    async function getGrades() {
        const res = await fetch("http://localhost:4000/grades");
        const data = await res.json();
        setGrades(data);
    }

    useEffect(() => {
        getGrades();
    }, []);


    const remove = id => {
        if (!window.confirm("האם למחוק את הציון?")) {
            return;
        }

        fetch(`http://localhost:4000/grade/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            setGrades(grades.filter(x => x.id !== id));
        });
    }

    
    return (
        <div>
            <h2>ציונים</h2>
            

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>תאריך</th>
                        <th>מקצוע</th>
                        <th>ציון</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    grades.map((g, i) => 
                        <tr key={g.id}>
                            <td>{i + 1}</td>
                            <td>{moment(g.date).format("DD/MM/YY")}</td>
                            <td>{g.title}</td>
                            <td>{g.grade}</td>
                            <td onMouseDown={ev => ev.preventDefault()}>
                                <button className='red' onClick={() => remove(g.id)}><BsFillTrash3Fill /></button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}