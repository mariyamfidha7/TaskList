import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TaskList from './pages/TaskList/TaskList';
// import Main from './pages/Main';
import InputForm from './pages/FormComponent';
import TaskListHandler from './pages/TaskList/TaskListHandler';

function App() {
  return (
    <div>
      {/* <InputForm/> */}
     <TaskListHandler/>
    </div>
  );
}

export default App;
