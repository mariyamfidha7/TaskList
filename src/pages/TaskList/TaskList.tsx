import React,{ useEffect, useState } from 'react'
import { tasksData } from '../../constants/tasks'
import Tasks from '../Tasks'
import { TaskPropType } from '../types'
import { Button, Card, Container, Pagination } from 'react-bootstrap'
// import "./styles/index.css"
import axios from 'axios'
import Demo from '../Demo'

const TaskList = ({filterFunction,setFilter,status,tasks,changeStatus,filteredStatus,offset,prevPage,nextPage}:any) => {

    
  return (
    <>
    <Container>
    <Card className='m-3 customCard'> {/*here m3 is to specify margin */}
    <Card.Header>
        {" "}
        Tasks for the day
        <select className='m-3' onChange={(e)=>{filterFunction(e);setFilter(e.target.value)}}>
            <option selected value="{'All'}">All</option>
            <option value={'complete'}>complete</option>
            <option value={'incomplete'}>incomplete</option>
        </select>
    </Card.Header>
    <Card.Body>
    {!status
            ? tasks.map((task:any) => (
                <Card.Body className="">
                  {" "}
                  <Tasks task={task} changeStatus={changeStatus} />
                </Card.Body>
              ))
            : filteredStatus.map((task:any) => (
                <Card.Body className="">
                  {" "}
                  <Tasks task={task} changeStatus={changeStatus} />
                </Card.Body>
              ))}
    {/* {!status?tasks.map((task)=><Tasks task={ task } changeStatus={ changeStatus }/>):filteredStatus.map((task)=><Tasks task={ task } changeStatus={ changeStatus }/>)}  */}
    </Card.Body>
    <Card.Footer>That's All!
        {/* <Button variant="primary" type="button" onClick={()=>window.location.href="/random"}>Click</Button> */}

        <Pagination>
      <Pagination.Prev onClick={prevPage} disabled={offset===10?true:false}></Pagination.Prev>
      {/* <Pagination.Item>1</Pagination.Item>
      <Pagination.Item>2</Pagination.Item>
      <Pagination.Item>3</Pagination.Item> */}
      <Pagination.Next onClick={nextPage} disabled={offset===40?true:false}></Pagination.Next>
    </Pagination>

    </Card.Footer>
    </Card>
    {!status && <Demo/>}
    </Container>
    </>
  )
}

export default TaskList