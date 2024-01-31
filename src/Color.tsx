import React, { useReducer, useState } from 'react'
import { Button } from 'react-bootstrap'


const countReducer=(state:{[key:number]:string},action:{type:string,payload:{ box: number, hexcode: string }})=>{

    if(action.type==="color"){
        return {...state,[action.payload.box]:action.payload.hexcode};
    }

    return {...state}
}

const Color = () => {

    const [state,dispatch]=useReducer(countReducer,{})
    const [box,setBox]=useState(0)
    const [hexcode,setHexcode]=useState('')

    const changeColor=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setHexcode(e.target.value)
        dispatch({type:"color", payload:{box, hexcode:e.target.value}})
    }   

  return (
    <div>Counter
        {Array.from({length:6},(_,index)=><div
        key={index+1}
        style={{
              width: '50px',
              height: '50px',
              backgroundColor: state[index+1],
              border: '1px solid #ccc',
              marginRight: '10px',
            }}
            >
        </div>)}

        <input type='number' placeholder='Enter box number' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setBox(parseInt(e.target.value))}}></input>
        <input type='text' placeholder='Enter hex code' onChange={changeColor}
            ></input>
    </div>
  )
}

export default Color