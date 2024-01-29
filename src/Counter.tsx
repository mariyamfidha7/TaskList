import React, { useReducer, useState } from 'react'
import { Button } from 'react-bootstrap'


const countReducer=(state:{count:number},action:{type:string,payload:number})=>{

    if(action.type==="increment"){
        return {count:state.count+action.payload};
    }
    else if(action.type==="decrement"){
        return {count:state.count-action.payload};
    }
    else if(action.type==="multiply"){
        return {count:state.count*action.payload};
    }
    else if(action.type==="divide"){
        return {count:state.count/action.payload};
    }

    return {...state}
}

const Counter = () => {


    const [state,dispatch]=useReducer(countReducer,{count:1})
    const [input,setInput]=useState(0)
  return (
    <div>Counter
        <h1>{state.count}</h1>
        <Button variant='primary' onClick={()=>dispatch({type:"increment", payload:input})}>+</Button>
        <Button variant='success' onClick={()=>dispatch({type:"decrement", payload:input})}>-</Button>
        <Button variant='danger' onClick={()=>dispatch({type:"multiply", payload:input})}>*</Button>
        <Button variant='warning' onClick={()=>dispatch({type:"divide", payload:input})}>/</Button>

        <input type='text' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setInput(parseInt(e.target.value))}></input>
    </div>
  )
}

export default Counter