import React, { useReducer } from 'react'
import { Button } from 'react-bootstrap'


const countReducer=(state,action)=>{

    if(action.type==="increment"){
        return {state:state+1};
    }
    else if(action.type==="decrement"){
        return {state:state-1};
    }
    else if(action.type==="multiply"){
        return {state:state*10};
    }
    else if(action.type==="divide"){
        return {state:state/2};
    }

    return {...state}
}

const Counter = () => {


    const [state,dispatch]=useReducer(countReducer,{count:0})
  return (
    <div>Counter
        <h1>{state.count}</h1>
        <Button variant='primary' onClick={()=>dispatch({type:"increment"})}>+</Button>
        <Button variant='success' onClick={()=>dispatch({type:"decrement"})}>-</Button>
        <Button variant='danger' onClick={()=>dispatch({type:"multiply"})}>*</Button>
        <Button variant='primary' onClick={()=>dispatch({type:"divide"})}>/</Button>
    </div>
  )
}

export default Counter