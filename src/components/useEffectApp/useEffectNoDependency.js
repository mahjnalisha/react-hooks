import React, { useState, useEffect } from 'react'

const useEffectNoDependency = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        document.title = `Counter:${counter}`;
    })
    function increaseCounter() {
        setCounter(counter + 1);
    }
    return (
        <div>
            <h1> Counter:{counter}</h1>
            <button onClick={increaseCounter}>Increase</button>
        </div>
    )
}

export default useEffectNoDependency