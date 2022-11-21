import React, { useContext } from 'react'
import ContextFile from '../context/context'

const ContextApi = () => {
    let {name} = useContext(ContextFile)
    console.log(name)
  return (
    <div>ContextApi {name}</div>
  )
}

export default ContextApi