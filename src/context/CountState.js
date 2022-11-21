import { useReducer } from "react";
import ContextFile from "./context";


const reducer = (state,action)=>{
    if(action.type==="inc"){
        state +=1
    }else if(action.type === 'dec'){
        state -=1
    }
    return state
}

 const CountState = (props)=>{
    const [state,dispatch] = useReducer(reducer,0)
    return (
        <ContextFile.Provider value={{count:state,dispatchofContext:dispatch}}>
           {props.children}
        </ContextFile.Provider>
    )
}
export {CountState}