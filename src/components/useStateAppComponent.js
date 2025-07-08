import React, { useState } from 'react'

const useStateAppComponent = () => {

    // State variable as the variable
    // const [counter, setCounter] = useState(0);
    // const [name, setName] = useState("");


    //new state as object

    const [details, setDetails] = useState({ counter: 0, name: "" });
    // first add all the prev method and update the required value
    function increaseCounter() {
        setDetails((prev) => ({
            ...prev,
            counter: details.counter + 1
        }));
    }

    function changeName(e) {
        var input = e.target.value;
        setDetails((prev) => ({
            ...prev,
            name: e.target.value
        })
        )
    }
    return (
        <div>
            <input type="text" onChange={(e) => changeName(e)} />
            <h1> {details.name} Counter:{details.counter}</h1>
            <button onClick={increaseCounter}>Increase</button>
        </div>
    )
}

export default useStateAppComponent

