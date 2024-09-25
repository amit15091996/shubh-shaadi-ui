import React from 'react'
import { createContext } from 'react'

export const ApiContext = createContext({})

const ApiContextProvider = ({ children, value }) => {
    return (
        <ApiContext.Provider value={value}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiContextProvider
