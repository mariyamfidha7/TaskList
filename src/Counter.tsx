import React, { useReducer } from 'react'
import { Button } from 'react-bootstrap'


const countReducer=(state:any,action:any)=>{

    if(action.type==="increment"){
        return {count:state.count+1};
    }
    else if(action.type==="decrement"){
        return {count:state.count-1};
    }
    else if(action.type==="multiply"){
        return {count:state.count*10};
    }
    else if(action.type==="divide"){
        return {count:state.count/2};
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
        <Button variant='warning' onClick={()=>dispatch({type:"divide"})}>/</Button>
    </div>
  )
}

export default Counter