import {useState, useEffect} from "react";
import axios from axios

const { useEffect } = require("react")

const EmployeeInfo = () => {
    const[error, setError] = useState(null)
    const[isLoaded] = useState(false)
    const[items,setItems] = useState([])
    
    
    useEffect(() => {
        axios.get("http://dummy.restapiexample.com/api/v1/employees")
        .then(res => res)
        .then((result)=>{
            setIsLoaded(true);
            setItems(result.data.data);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
            }
        );
    }, []);

    if (error) {
        return <div> Error: {error.message}</div>;
    }else if (!isLoaded){
        return<div>Loading...</div>
    }else{
        return (
            <ul>
                {console.log(items)}
                {items.map((item) => (
                <li key={item.id}>
                </li>    
                ))}
            </ul>
        );
    }
}

export default EmployeeInfo
    
