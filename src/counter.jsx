import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleCount = () =>{
        const countAdd = count + 1;
        setCount(countAdd);
    }
    const setReduce = ()=>{
        const reduce = count-1;
        setCount(reduce)
    }

    return(
        <div style={{border: '2px solid'}}>
            <h2>
                counter:{count}
            </h2>
            <button onClick={handleCount}>add</button>
            <button onClick={setReduce}>reduce</button>
        </div>
    )
}