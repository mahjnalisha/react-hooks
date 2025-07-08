import React, { useState, useEffect } from 'react'

const useEffectwithEmptyArray = () => {
    const [counter, setCounter] = useState(0);
    // only render 1st time - used when data to be fetched from the server
    useEffect(() => {
        document.title = `Counter:${counter}`;
    }, [])

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

export default useEffectwithEmptyArray