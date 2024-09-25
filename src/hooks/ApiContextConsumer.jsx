import React, { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContextProvider'

const ApiContextConsumer = () => {
    return (useContext(ApiContext))
}

export default ApiContextConsumer
