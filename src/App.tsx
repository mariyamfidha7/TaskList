import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TaskList from './pages/TaskList/TaskList';
// import Main from './pages/Main';
import InputForm from './pages/FormComponent';
// import TaskListHandler from './pages/TaskList/TaskListHandler';
// import Nav from './pages/TaskList/Nav';
// import ThemeContext from './components/ThemeContext/ThemeContext';
import Counter from './Counter';
import Color from './Color';
import CustomCounter from './CustomCounter';
import { lazy, Suspense } from 'react';

const TaskListHandler = lazy(()=>import('./pages/TaskList/TaskListHandler'))
const Nav = lazy(()=>import('./pages/TaskList/Nav'))
const ThemeContext = lazy(()=>import('./components/ThemeContext/ThemeContext'))

function App() {
  return (
    <div>
      <ThemeContext>
      <Nav/>

{/* <CustomCounter/> */}
{/* <Color/> */}
{/* <Counter/> */}
      {/* <InputForm/> */}
     <TaskListHandler/>
     </ThemeContext>
    </div>
  );
}

export default App;
