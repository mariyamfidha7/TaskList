import { useState } from "react";

const useCounter=(iv=0,step=1)=>{
    
    const[count,setCount]=useState(iv)

    const increment=()=>{
        setCount((prev)=>prev+step)
    }

    const decrement=()=>{
        setCount((prev)=>prev-step)
    }

    return {count, increment, decrement}
}

export default useCounter;