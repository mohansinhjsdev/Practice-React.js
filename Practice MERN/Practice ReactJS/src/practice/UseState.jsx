import React,{useState} from "react";

const UseState = () => {

    const [count, setCount] = useState(0);

    const handleInc = () =>{
        if(count >=10){
            return alert("Count Not Mount more then 10")
        }
        setCount(count +1)
    }
    const handleDec = ()=>{
        if(count <= 0){
            return alert("Count not mount less then 0")
        }
        setCount(count - 1)
    }
  return (
    <>
      <div>
        <h2>How would you create a simple counter component?</h2>
        <p>Count : {count}</p>
        <button
        onClick={handleInc}>Increement</button>
        <button
        onClick={handleDec}>Decreement</button>
        
      </div>
    </>
  );
};

export default UseState;
