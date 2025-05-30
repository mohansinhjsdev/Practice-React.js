import React from 'react'

const RenderList = () => {


    // render array
    // const data = ["Apple","Mango","Orange","Pinapple"]

    // render object
    const user = [
        {id:1, name:"Rawat"},
        {id:1, name:"Negi"},
        {id:1, name:"Juyal"},
        {id:1, name:"Bisht"},
        {id:1, name:"Thakur"},
    ]
  return (
   <>
     {/* <div>
        <h1>Render List Array</h1>
        <ul style={{listStyle:"none"}}>
            {data.map((data)=>(
                <li>{data}</li>
            ))}
        </ul>
        
      </div> */}

      <div>
        <h1>Render List Of Object</h1>
        <ul style={{listStyle:"none"}}>
            {user.map((item,index)=>(
                <li key={index}>{item.name}</li>
            ))}
        </ul>
      </div>
   </>
  )
}

export default RenderList
