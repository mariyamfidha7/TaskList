import React, { useEffect } from 'react'

const Demo = () => {

    window.addEventListener("click",()=>console.log("click added"))

    useEffect(()=>{

        return()=>{
            window.removeEventListener("click",()=>console.log("removed"))
        }
    },[])
  return (
    <div>Demo
        Random thing
    </div>
  )
}

export default Demo