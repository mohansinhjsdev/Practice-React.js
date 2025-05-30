import React, { useEffect, useState } from 'react'
import axios from "axios"
const FetchData = () => {

     const [todo,setTodo] = useState([])

     useEffect(()=>{
        const fetchData = async() =>{
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
                console.log("response",response.data)
                setTodo(response.data.slice(0,10))
            } catch (error) {
                console.log("error",error)        
            }
        }
        fetchData();
     },[])
  return (
    <>
    <div>
        <h2>How would you fetch and display data from an API in React?</h2>
        <ul style={{listStyle:"none",}}>
            {todo.map((todo,index)=>(
                <li                 
                style={{border:"2px solid yellow"}}
                key={index}>
                    <p>{todo.id} {todo.title}</p>
                </li>

            ))}
        </ul>
      </div>
    </>
  )
}

export default FetchData
