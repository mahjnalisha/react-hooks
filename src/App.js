import React, { useState, useEffect, useRef } from 'react'

const App = () => {
  const [name, setName] = useState("");
  const inputEle = useRef();
  const counter = useRef(0);
  useEffect(() => {
    counter.current = counter.current + 1;
  })

  const handleClick = () => {
    inputEle.current.style.width = "300px";
    inputEle.current.focus();
  }
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} ref={inputEle} /><br></br>
      <button onClick={handleClick}>Click Here</button>
      <h3>Your name is {name} Counter: {counter.current}</h3>

    </div>
  )
}

export default App