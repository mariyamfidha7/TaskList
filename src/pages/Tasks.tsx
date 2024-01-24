import React, { useEffect, useState } from 'react'
import { TaskPropType,TaskComponentPropType } from './types'
import { Card, Form } from 'react-bootstrap'
import './styles/index.css'

const Tasks = ({ task, changeStatus }:TaskComponentPropType) => {

  const [currentAction, setCurrentAction]=useState(false)

  useEffect(()=>{
    console.log("action done")
  },[currentAction])
  return (
    <div>
        <Card className='m-3 px-3 customTask'>
            <Form>
                <Form.Check 
                label={task.title} 
                checked={task.status==="complete"?true:false}
                onChange={(e)=>{
                  changeStatus(e);
                  setCurrentAction(true)
                }}
                value={task.id}
                />
            </Form>
        </Card>
    </div>
  )
}

export default Tasks