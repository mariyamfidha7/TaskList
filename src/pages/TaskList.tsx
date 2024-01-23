import React,{ useEffect, useState } from 'react'
import { tasksData } from '../constants/tasks'
import Tasks from './Tasks'
import { TaskPropType } from './types'
import { Button, Card, Container } from 'react-bootstrap'
import "./styles/index.css"

const TaskList = () => {

    const [tasks, setTasks]=useState<TaskPropType["task"][]>(tasksData)
    const [filteredStatus, setFilteredStatus]=useState<TaskPropType["task"][]>(tasksData)
    const [status,setStatus]=useState<boolean>(false)

    const changeStatus=(e:React.ChangeEvent<HTMLInputElement>)=>{


            let taskId:number=parseInt(e.target.value)
            let filteredTask:TaskPropType["task"][] = tasksData.filter((task)=>task.id===taskId)
            filteredTask[0].status=e.target.checked?"complete":"incomplete"

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

    useEffect(()=>{
        console.log("component mounted")
        return()=>{
            console.log("unmounted")
        }
    })
    
  return (
    <>
    <Container>
    <Card className='m-3 customCard'> {/*here m3 is to specify margin */}
    <Card.Header>
        {" "}
        Tasks for the day
        <select className='m-3' onChange={filterFunction}>
            <option selected value="{'All'}">All</option>
            <option value={'complete'}>complete</option>
            <option value={'incomplete'}>incomplete</option>
        </select>
    </Card.Header>
    <Card.Body>
    {!status
            ? tasks.map((task) => (
                <Card.Body className="">
                  {" "}
                  <Tasks task={task} changeStatus={changeStatus} />
                </Card.Body>
              ))
            : filteredStatus.map((task) => (
                <Card.Body className="">
                  {" "}
                  <Tasks task={task} changeStatus={changeStatus} />
                </Card.Body>
              ))}
    {/* {!status?tasks.map((task)=><Tasks task={ task } changeStatus={ changeStatus }/>):filteredStatus.map((task)=><Tasks task={ task } changeStatus={ changeStatus }/>)}  */}
    </Card.Body>
    <Card.Footer>That's All!
        <Button variant="primary" type="button" onClick={()=>window.location.href="/random"}>Click</Button>
    </Card.Footer>
    </Card>
    </Container>
    </>
  )
}

export default TaskList