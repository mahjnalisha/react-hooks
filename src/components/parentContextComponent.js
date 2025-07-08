import React from 'react'
import MainComponent from "./components/createContextComponent/useContextComponent"
import LoginContextProvider from './context/LoginContextProvider';


const App = () => {
    return (

        <LoginContextProvider>
            <div>
                <MainComponent></MainComponent>


            </div>
        </LoginContextProvider>


    )
}

export default App