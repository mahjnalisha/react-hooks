import React, { useState, createContext } from 'react'
export const LoginContext = createContext();
const LoginContextProvider = () => {
    return (
        <LoginContext.Provider value={true}>

        </LoginContext.Provider>
    )
}

export default LoginContextProvider