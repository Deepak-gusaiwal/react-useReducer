import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state,action)=>{
    if(action.type === 'dec' && state>0){
        state -= 1
    }else if(action.type === 'inc' && state<10){
        state +=1
    }else if(action.type === 'inc+2' && state<10){
        state +=2
    }else if(action.type === 'dec-2' && state>0){
        state -=2
    }
    return state;
}



const ReducerHook = () => {
   const [state ,dispatch] =useReducer(reducer,initialState)
  return (
    <>
    <div style={{display:"flex" ,gap:"2rem",margin:"1rem 0"}}>

    <button onClick={()=>{dispatch({type:"dec"})}}>-</button>
    <button onClick={()=>{dispatch({type:"dec-2"})}}>Decriment by 2</button>
    <p>Value {state} </p>

    <button onClick={()=>{dispatch({type:"inc"})}}>+</button>
    <button onClick={()=>{dispatch({type:"inc+2"})}}>Incripment by 2</button>
    </div>
    </>
  )
}

export default ReducerHook