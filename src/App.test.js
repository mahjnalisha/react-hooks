import React, { useState, createContext } from 'react'
import MainComponent from "./components/createContextComponent/useContextComponent"
import UseStateAppComponent from "./components/useStateAppComponent"
import UseEffectsAppComponent from "./components/useEffectApp/useEffectNoDependency"
import UseEffectsAppwithVariablesComponent from "./components/useEffectApp/useEffectswithVariables"
// import UseStateAppComponent from "./components/useStateAppComponent"
// import UseStateAppComponent from "./components/useStateAppComponent"


export const LoginContext = createContext();

const App = () => {
  return (

    <LoginContext.Provider value={true}>
      <div>
        <div className='box-sizing'>
          <h1>Use State App Component</h1>
          <UseStateAppComponent></UseStateAppComponent>
        </div>
        <hr></hr>
        <div className='box-sizing'>
          <h1>Use Effect App Component</h1>
          <UseEffectsAppComponent></UseEffectsAppComponent>
        </div>
        <hr></hr>
        <div className='box-sizing'>
          <h1>Use Effect App with Varibales Component</h1>
          <UseEffectsAppwithVariablesComponent></UseEffectsAppwithVariablesComponent>
        </div>
        <hr></hr>

        <MainComponent></MainComponent>


      </div>
    </LoginContext.Provider>


  )
}

export default App