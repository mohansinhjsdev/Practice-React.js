import React, { useState } from 'react'

const Form = () => {
    const [data,setData] = useState({
        name:'',
        email:'',
        number:''
    })

   const [error,setError] = useState("")

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setError("")

      if(name == "number"){
        if(value.length > 10) return;
        if(!/^\d*$/.test(value)) return;
      }

        setData(prevData =>({
            ...prevData,
            [name]:value
        }))
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setError("")

        if(!data.email.includes("@") || !data.email.includes(".")){
            setError("Email must includes @ or .")
            return;
        }

        if(data.number.length !== 10){
            setError("Number must be 10 Numbers")
            return;
        }

        alert("succesfully submited")
        console.log(data)
        setData({name:"",email:"",number:""})
    }

  return (
    <>
        <div>
            <h2>Create a simple form with controlled components.</h2>
            {error && <div>{error}</div>}
           
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='name' 
                name='name'
                value={data.name} onChange={handleChange}/>
                <input type="text" placeholder='email' 
                name='email'
                value={data.email} onChange={handleChange}/>
                <input type="number" 
                name='number'
                placeholder='number' value={data.number} onChange={handleChange}
                />
                <button
                type='submit'>Submit</button>
            </form>
      </div>
    </>
  )
}

export default Form
