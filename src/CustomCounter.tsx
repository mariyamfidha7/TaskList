import React from 'react'
import { Button } from 'react-bootstrap'
import useCounter from './useCounter'

const CustomCounter = () => {

    const{count, increment, decrement}=useCounter(3,6)

  return (
    <div>CustomCounter
        <Button variant='primary' onClick={increment}>+</Button>
        <span>{count}</span>
        <Button variant='primary' onClick={decrement}>-</Button>
    </div>
  )
}

export default CustomCounter