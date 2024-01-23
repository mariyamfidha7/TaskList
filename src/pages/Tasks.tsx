import React from 'react'
import { TaskPropType,TaskComponentPropType } from './types'
import { Card, Form } from 'react-bootstrap'
import './styles/index.css'

const Tasks = ({ task, changeStatus }:TaskComponentPropType) => {
  return (
    <div>
        <Card className='m-3 px-3 customTask'>
            <Form>
                <Form.Check 
                label={task.title} 
                checked={task.status==="complete"?true:false}
                onChange={changeStatus}
                value={task.id}
                />
            </Form>
        </Card>
    </div>
  )
}

export default Tasks