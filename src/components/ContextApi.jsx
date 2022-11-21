import React, { useContext } from 'react'
import ContextFile from '../context/context'

const ContextApi = () => {
  let { count, dispatchofContext } = useContext(ContextFile)
  // console.log(count, dispatchofContext)
  return (
    <>
      <h1>ContextApi </h1>

      <div style={{ display: "flex", gap: "2rem", margin: "1rem 0" }}>

        <button onClick={() => { dispatchofContext({ type: "dec" }) }}>-</button>
        <p>Value {count} </p>

        <button onClick={() => { dispatchofContext({ type: "inc" }) }}>+</button>
      </div>
    </>
  )
}

export default ContextApi