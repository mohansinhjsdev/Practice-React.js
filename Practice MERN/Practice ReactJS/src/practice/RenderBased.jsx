import React, { useEffect, useState } from 'react'

const RenderBased = () => {
  const [data, setData] =  useState([]);
  const [input, setInput] = useState("");

  // On mount, load data from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem("names");
    console.log("Loaded from storage:", storedData);
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  // Whenever data changes, save to localStorage
  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(data));
  }, [data]);

  const handleClick = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setData(prev => [...prev, input]);
      setInput("");
    }
  };

  return (
    <>
      <div>
        <h1>Render Based</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={input}
          onChange={e => setInput(e.target.value)}
          name="name"
        />
        <button onClick={handleClick}>Submit</button>
      </div>

      {data.length === 0 ? (
        <p>No items added yet. Please add some item.</p>
      ) : (
        <div>
          <h3>Name: {data.length}</h3>
          <ul style={{listStyle:"none"}}>
            {data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default RenderBased;