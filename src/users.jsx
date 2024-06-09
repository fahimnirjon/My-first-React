import { useEffect, useState } from "react"
import './User.css'
import User from "./user";
export default function Users(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return(
        
        <div className='box'>
            <h2>users:{users.length} </h2>
            {
                users.map(user => <User user={user} ></User>)
            }
        </div>
    )
}