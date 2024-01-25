
import TaskList from './TaskList'
import React,{ useEffect, useState } from 'react'
import { tasksData } from '../../constants/tasks'
import Tasks from '../Tasks'
import { TaskPropType } from '../types'
import { Button, Card, Container, Pagination } from 'react-bootstrap'

import axios from 'axios'
import Demo from '../Demo'

const TaskListHandler = () => {

    const [tasks, setTasks]=useState<TaskPropType["task"][]>(tasksData)
    const [filteredStatus, setFilteredStatus]=useState<TaskPropType["task"][]>(tasksData)
    const [status,setStatus]=useState<boolean>(false)
    const [filter,setFilter]=useState<string>("All")
    const [offset,setOffset]=useState(10)

    const changeStatus=(e:React.ChangeEvent<HTMLInputElement>)=>{


            let taskId:number=parseInt(e.target.value)
            let filteredTask:TaskPropType["task"][] = tasks.filter((task)=>task.id===taskId)
            filteredTask[0].status=e.target.checked?"complete":"incomplete"
            // setCurrentAction(true)

            setTasks((prev)=>{

            let toReplaceData=prev.filter((data)=>data.id===filteredTask[0].id)
            let toReplaceIndex=prev.indexOf(toReplaceData[0])
            prev.splice(toReplaceIndex,1,filteredTask[0])
            return [...prev]})
    }

    const filterFunction=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        if(e.target.value==="All"){
            setFilteredStatus(tasks)
            setStatus(false)
        }
        else{
            let filtered = tasks.filter((task)=>task.status===e.target.value)
       
        setFilteredStatus(filtered)
        setStatus(true) 
        }
        
    }

    const prevPage=()=>{
      setOffset((prev)=>prev-10)
    }

    const nextPage=()=>{
      setOffset((prev)=>prev+10)
    }


    const apiCall=async()=>{
      // let fetchResponse=await fetch("https://my.api.mockaroo.com/Task10?key=73836970")
      // console.log(fetchResponse)

      let axiosRes=await axios.get(`https://0bd67426-e6a8-49b3-8e59-a5524e33ecf7.mock.pstmn.io/task/offset=${offset}`)
      .then((data)=>{setTasks(data.data as TaskPropType["task"][]);setFilteredStatus(data.data)})
      .catch((err)=>err);
      console.log(axiosRes)
    };



   

    useEffect(()=>{
      apiCall();
        console.log("component mounted")
        return()=>{
            console.log("unmounted")
        }
    },[])
    

    useEffect(()=>{ //whenever you want to do something based on the change of a state we use useeffect
      if(filter!=="All")
      setFilteredStatus((prev)=>prev.filter((data)=>data.status===filter))
    },[tasks])

    useEffect(()=>{
      apiCall();
    },[offset])

  return (
    <TaskList
   filterFunction={filterFunction}
   setFilter={setFilter}
   status={status}
   tasks={tasks}
   changeStatus={changeStatus}
   filteredStatus={filteredStatus}
   offset={offset}
   prevPage={prevPage}
   nextPage={nextPage}
 
 
   
   />

  )
}

export default TaskListHandler