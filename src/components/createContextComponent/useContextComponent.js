import React, { useContext } from 'react'
import { LoginContext } from "../../context/LoginContextProvider"

const useContextComponent = () => {
    const login = useContext(LoginContext);
    return (
        <div>
            <h3>Single post</h3>
        </div>
    )
}

export default useContextComponent