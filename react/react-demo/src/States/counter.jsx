import {useState} from React;
function Counter(){

    const [count,setCount] = useState();

    return(
        <>
        <h1>Counter</h1>
        <input type="number" value={count} onChange={(event)=>setCount
        (event.target.value)}/>
        <button onClick={()=>setCount(count+1)}>increment 1</button>
        <button onClick={()=>setCount(count-1)}>decrement 1</button>
        <button onClick={()=>setCount(0)}>reset</button>
        </>
    )
}

export default Counter