import React, { useMemo, useState } from 'react'
const expensiveFunction = () => {
  let countexcess = 0;
  for (var i = 0; i < 100000; i++) {
    countexcess = countexcess * 2;
  }
  return countexcess;
}

const App = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const memoCalculation = useMemo(() => {
    return expensiveFunction(number)
  }, [number]);
  // const calculation = expensiveFunction(number);
  const cssStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black"
  }

  return (
    <>
      <div>here</div>
      <div style={cssStyle} >
        <input onChange={(e) => setNumber(e.target.valueAsNumber)} type="number" />
        <h2>{memoCalculation}</h2>
        <button onClick={() => setDark(!dark)}>Toggle</button>

      </div >
    </>
  )
}

export default App