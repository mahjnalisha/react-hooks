import React, { useState, useEffect } from 'react'

const useEffectswithVariables = () => {
    const [counter, setCounter] = useState(0);
    const [othercounter, setotherCounter] = useState(5);

    // title only change on the otherCount
    useEffect(() => {
        document.title = `Counter:${othercounter}`;
    }, [othercounter])

    function increaseCounter() {
        setCounter(counter + 1);
    }
    function increaseotherCounter() {
        setotherCounter(othercounter + 5);
    }
    return (
        <div>
            <div>
                <h1> Use effect to show the change in the title using the second counter</h1>
            </div>
            <h1> Counter:{counter}</h1>
            <button onClick={increaseCounter}>Increase</button>
            <h1> Counter:{othercounter}</h1>
            <button onClick={increaseotherCounter}>Increase</button>

        </div>
    )
}

export default useEffectswithVariables