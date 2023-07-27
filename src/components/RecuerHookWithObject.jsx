import React, { useReducer } from "react";

const RecuerHookWithObject = () => {
  const initialState = {
    count: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "inc":
        console.log('increment')
        return { ...state, count: state.count + 1 };
      case "dec":
        console.log('decrement')
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { count } = state;
  return (
    <div>
      <button onClick={()=>{dispatch({type:'dec'})}}>-</button>
      <span>
        <strong>{count}</strong>
      </span>
      <button onClick={()=>{dispatch({type:'inc'})}}>+</button>
    </div>
  );
};

export default RecuerHookWithObject;
