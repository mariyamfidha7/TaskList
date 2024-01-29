import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TaskList from './pages/TaskList/TaskList';
// import Main from './pages/Main';
import InputForm from './pages/FormComponent';
import TaskListHandler from './pages/TaskList/TaskListHandler';
import Nav from './pages/TaskList/Nav';
import ThemeContext from './components/ThemeContext/ThemeContext';
import Counter from './Counter';
import Color from './Color';

function App() {
  return (
    <div>
      <ThemeContext>
      <Nav/>

<Color/>
{/* <Counter/> */}
      {/* <InputForm/> */}
     {/* <TaskListHandler/> */}
     </ThemeContext>
    </div>
  );
}

export default App;
